import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {LoginService} from '../../services/login.service';
import { Route, Router } from '@angular/router';
import { SharedLoginService } from '../../services/shared-login.service'
@Component({
  selector: 'app-login-users',
  templateUrl: './login-users.component.html',
  styleUrls: ['./login-users.component.scss']
})
export class LoginUsersComponent {
  username: string="";
  password: string="";
  rol: number = 0;
  constructor(private loginService: LoginService, private router: Router, private sharedLogin : SharedLoginService){}
  
  login() {
    const body = {
      username: this.username,
      password: this.password
    };
    this.loginService.login(body).subscribe({
      next: (res) =>{
        var respuesta:any;
        respuesta = res;
        this.sharedLogin.sharedData = respuesta;
        console.log(respuesta);
        this.rol = respuesta.body.rol;
        localStorage.setItem("rol", ""+this.rol);
        localStorage.setItem("id_usuario", ""+respuesta.body.id);
        localStorage.setItem("identificador", ""+respuesta.body.identificador);
        if(this.rol === 1){
          this.router.navigateByUrl("dashboard-admins");
        }else if(this.rol === 2){
          this.router.navigateByUrl("dashboard-users");
        }
      },error: (err) => {
        if (err.error.status == 401) {
              alert("Usuario o Contraseña Incorrecto");
            }else{
              console.log("Error del servidor");
            }
      }
    });
  }

}