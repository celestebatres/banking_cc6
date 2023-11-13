import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const HEADERS = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class PagoMultasService {
  url_pagar_multas = "https://cheaply-safe-mink.ngrok-free.app/multas/pagar_multa";

  constructor(private http:HttpClient) { }
  
  pagar_multas(body:any){
    return this.http.post(this.url_pagar_multas, body, HEADERS)
  }
}
