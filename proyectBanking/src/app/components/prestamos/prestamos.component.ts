import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasService } from 'src/app/services/cuentas.service';
import { PrestamosService } from 'src/app/services/prestamos.service';
import { SharedLoginService } from 'src/app/services/shared-login.service';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent {
  prestamos_ :any
  constructor(private router: Router, private sharedLogin: SharedLoginService, private prestamos: PrestamosService ){}
  
  ngOnInit(){
    this.getPrestamos();
  }
  getPrestamos(){
    console.log(this.sharedLogin.sharedData)
    const uid = this.sharedLogin.sharedData.body.id_usuario
    this.prestamos.get_prestamos(uid).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        this.prestamos_ = respuesta
        console.log(respuesta)
      },error: (err) => { 
        alert("No se recuperaron prestamos intentalo mas tarde!");
      }
    });
  }
}
