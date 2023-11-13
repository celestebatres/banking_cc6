import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = "https://d302rdmk-3000.use2.devtunnels.ms";
  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(this.url + "/api/usuarios");
  }

  getUser(id:string){
    return this.http.get(this.url +  "/api/usuarios/" + id)
  }

  deleteUser(body:any){
    return this.http.delete(this.url + "/api/usuarios", body);
  }
}
