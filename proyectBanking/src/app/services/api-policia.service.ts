import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const HEADERS = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
@Injectable({
  providedIn: 'root'
})


export class ApiPoliciaService {
  url_persona = "https://cheaply-safe-mink.ngrok-free.app/usuarios/consultar_persona";
  url_multas = "https://cheaply-safe-mink.ngrok-free.app/multas/consultar_multas_sinpagar";
  constructor(private http:HttpClient) { }

  validar_uid(body:any){
    return this.http.post(this.url_persona,body, HEADERS);    
  }

  get_multas(body:any){
    return this.http.post(this.url_multas, body, HEADERS)
  }
}
