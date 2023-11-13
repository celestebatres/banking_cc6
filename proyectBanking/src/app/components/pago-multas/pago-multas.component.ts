import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/models/Cuenta';
import { CuentasResponse } from 'src/app/models/CuentasResponse';
import { MultasResponse } from 'src/app/models/MultasResponse';
import { ApiPoliciaService } from 'src/app/services/api-policia.service';
import { CuentasService } from 'src/app/services/cuentas.service';
import { PagoMultasService } from 'src/app/services/pago-multas.service';
import { SharedLoginService } from 'src/app/services/shared-login.service';

@Component({
  selector: 'app-pago-multas',
  templateUrl: './pago-multas.component.html',
  styleUrls: ['./pago-multas.component.scss']
})
export class PagoMultasComponent {
  multas = new MultasResponse("",[], 0, 0);
  cuentas = new CuentasResponse(false, 0, []);
  multaId = 0
  multaMonto = 0;
  multaPersona = 0;
  cuenta=0;
  constructor(private policiaService: ApiPoliciaService, private router: Router, private pagoMultas: PagoMultasService, private sharedLogin: SharedLoginService, private cuentasService: CuentasService ){}
  

  getMultas(){
    const body = {
        "cui": this.sharedLogin.sharedData.body.identificador,
        "pasaporte": -1
    };
    this.policiaService.get_multas(body).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        this.multas = respuesta
        console.log(this.sharedLogin.sharedData.body.identificador);
        console.log(this.multas.multas);
      },error: (err) => { 
        console.log(this.sharedLogin.sharedData.body.rol.id_usuario);
        alert("No se recuperaron multas intentalo mas tarde!");
      }
    });
  }
  getAccounts(){
    console.log(this.sharedLogin.sharedData)
    const uid = this.sharedLogin.sharedData.body.id_usuario
    this.cuentasService.get_cuentas(uid).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        this.cuentas = respuesta
        console.log('this.cuentas');
        console.log(this.cuentas);
        console.log(this.cuentas.body);
      },error: (err) => { 
        alert("No se recuperaron cuentas intentalo mas tarde!");
      }
    });
  }
  ngOnInit(){
    this.getMultas();
    this.getAccounts();
  }
  pre_pay(multa:number, monto:number, persona:number){
    this.multaId = multa
    this.multaMonto = monto;
    this.multaPersona = persona;
  }
  pay_bank(){
    const cuentaLocal = this.cuentas.body.find(item => item.cuenta_bancaria == this.cuenta);
    if( !cuentaLocal || cuentaLocal?.balance < this.multaMonto){
      alert("no tienes fondos suficientes");
    }else{
      const uid = this.sharedLogin.sharedData.body.id_usuario
      this.cuentasService.get_cuentas(uid).subscribe({
        next: (res) =>{
          var respuesta:any;
          respuesta = res;
          this.pay_police()
        },error: (err) => { 
          alert("No se pudo conectar con el banco, intentalo mas tarde!");
        }
      });
    }
  }
  pay_police(){
    const cuentaLocal = this.cuentas.body.find(item => item.cuenta_bancaria == this.cuenta);
    const body = {
      "persona": this.multaPersona,
      "multa":this.multaId
    };
    console.log(body)
    this.pagoMultas.pagar_multas(body).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        let body = {
          "cuenta_bancaria" :cuentaLocal?.cuenta_bancaria ,
          "id_usuario" : this.sharedLogin.sharedData.body.id_usuario,
          "balance": (cuentaLocal?.balance ? (cuentaLocal?.balance - this.multaMonto):cuentaLocal?.balance)
        }
        this.cuentasService.update_cuenta(body).subscribe({
          next: (res) =>{
            var respuesta:any;
            respuesta = res;
            this.getMultas()
          },error: (err) => { 
            alert("No se pudo conectar con el banco, intentalo mas tarde!");
          }
        });
      },error: (err) => {
        if (err.error.status == 401) {
              console.log("401");
            }else{
              alert("No se pudo conectar con la policia, intentalo mas tarde!");
            }
      }
    });
  }
}
