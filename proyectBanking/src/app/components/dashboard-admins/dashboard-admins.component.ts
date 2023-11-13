import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsuarioResponse } from 'src/app/models/Usuario.response.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard-admins',
  templateUrl: './dashboard-admins.component.html',
  styleUrls: ['./dashboard-admins.component.scss']
})
export class DashboardAdminsComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router) { }
  public usuarios: Usuario[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe({
      next: (res) => {
        var respuesta: any;
        respuesta = res;
        this.usuarios = respuesta.body;
        console.log(this.usuarios);
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  deleteUsuario(id:string){
    let body  = {};
    this.usersService.deleteUser(body).subscribe({
      next: (res) => {
        var respuesta: any;
        respuesta = res;
        this.usuarios = respuesta.body;
        console.log(this.usuarios);
      }, error: (err) => {
        console.log(err);
      }
    });
  }

}
