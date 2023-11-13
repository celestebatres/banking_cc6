import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detalles-usuario',
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.scss']
})
export class DetallesUsuarioComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService){
  }
  public usuarios: Usuario[] = [];

  id_user: any = '';
  usuario: any;

  ngOnInit() {
    this.id_user = this.activatedRoute.snapshot.paramMap.get('id');
    this.getUser(this.id_user);
  }



  getUser(id:string){
    this.usersService.getUser(id).subscribe({
      next: (res) => {
        var respuesta: any;
        console.log(res);
        respuesta = JSON.parse(JSON.stringify(res));
        this.usuarios = respuesta.body;
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  getCuenta(id:string){}


}
