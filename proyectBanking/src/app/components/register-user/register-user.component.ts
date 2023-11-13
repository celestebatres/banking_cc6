import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPoliciaService } from 'src/app/services/api-policia.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})

export class RegisterUserComponent {
  constructor(private registerService: RegisterService, private policiaService: ApiPoliciaService, private router: Router) { }

  rol = 1;
  nombre: string = "";
  identificador: string = "";
  fecha_nacimiento: Date = new Date;
  sexo: string = "";
  direccion: string = "";
  telefono: string = "";
  estado_civil: string = "";
  correo: string = "";
  activo = 1;
  username: string = "";
  password: string = "";
  token: string = "token";
  register() {
    const body = {
      id_usuario: 0,
      rol: this.rol,
      nombre: this.nombre,
      identificador: this.identificador,
      fecha_nacimiento: this.fecha_nacimiento,
      sexo: this.sexo,
      direccion: this.direccion,
      telefono: this.telefono,
      estado_civil: this.estado_civil,
      correo: this.correo,
      activo: this.activo,
      username: this.username,
      password: this.password,
      token: this.token,
    };

    let body_poli = `{
      "cui": ${this.identificador},
      "pasaporte": -1
    }`;

    this.policiaService.validar_uid(body_poli).subscribe({
      next: (res) => {
        var respuesta: any;
        respuesta = res;
        console.log(respuesta);
        let persona_existe = respuesta.persona_existe;
        // Persona existe en Poli
        
        if (persona_existe === 1 && 1 > 2) {
          alert("Persona Existe")
            this.registerService.register(body).subscribe({
              next: (res) => {
                var respuesta: any;
                respuesta = res;
                console.log(respuesta);
              }, error: (err) => {
                if (err.error.status == 401) {
                  alert("Usuario o Contraseña Incorrecto");
                } else {
                  console.log("Error del servidor");
                }
              }
            });
        }else {
          alert("La persona no existe");
        }
      }, error: (err) => {
        // Error de Conexion o Más
        console.log(err);
      }
    });
  }
}
