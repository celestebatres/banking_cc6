import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CuentasResponse } from 'src/app/models/CuentasResponse';
import { CuentasService } from 'src/app/services/cuentas.service';
import { SharedLoginService } from 'src/app/services/shared-login.service';

@Component({
  selector: 'app-dashboard-users',
  templateUrl: './dashboard-users.component.html',
  styleUrls: ['./dashboard-users.component.scss']
})
export class DashboardUsersComponent implements OnInit {
  cuentas = new CuentasResponse(false, 0, []);

  constructor(private router: Router, private sharedLogin: SharedLoginService, private cuentasService: CuentasService ){}

  ngOnInit(){
    this.getAccounts();
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
}
