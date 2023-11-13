import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'https://d302rdmk-3000.use2.devtunnels.ms';
  constructor(private http:HttpClient) { }

  register(usuario:any){
    return this.http.post(this.url+'/api/usuarios',usuario);
  }
}
