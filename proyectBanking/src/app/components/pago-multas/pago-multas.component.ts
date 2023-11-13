import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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
  multaId = 0
  multaMonto = 0;
  multaPersona = 0;
  constructor(private policiaService: ApiPoliciaService, private router: Router, private pagoMultas: PagoMultasService, private sharedLogin: SharedLoginService, private cuentasService: CuentasService ){}
  

  getMultas(){
    const body = {
        "cui": 1234567890123,
        "pasaporte": -1
    };
    this.policiaService.get_multas(body).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        this.multas = respuesta
        console.log(this.sharedLogin.sharedData.body);
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
        console.log(respuesta);
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
  pay(multa:number, monto:number, persona:number){
    const body = {
      "persona":persona,
      "multa":multa
};
    this.pagoMultas.pagar_multas(body).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        console.log(respuesta);
        
      },error: (err) => {
        if (err.error.status == 401) {
              console.log("401");
            }else{
              console.log("Error del servidor");
            }
      }
    });
  }
}
