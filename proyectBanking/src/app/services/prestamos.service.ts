import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HEADERS = {headers: new HttpHeaders().set('Content-Type', 'application/json')};
@Injectable({
  providedIn: 'root'
})
export class PrestamosService {
  url = "https://d302rdmk-3000.use2.devtunnels.ms";

  constructor(private http:HttpClient) { }
  
  get_prestamos(id: any){
    return this.http.get(this.url + "/api/prestamos/searchIdUser/1");
  }
  agregarPrestamo(body:any){

    return this.http.post(this.url, body, HEADERS)
  }
}
