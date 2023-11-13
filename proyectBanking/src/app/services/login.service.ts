import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://d302rdmk-3000.use2.devtunnels.ms';
  constructor(private http: HttpClient, private router:Router) { }

  //get usuarios

  login(usuario: any){
    return this.http.post(this.url + "/api/auth/login", usuario);
  }

  todos(){
    return this.http.get(this.url + "/api/usuarios");
  }
}