import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CuentasService {
  url = "https://d302rdmk-3000.use2.devtunnels.ms";

  constructor(private http:HttpClient) { }
  
  get_cuenta(id: any){
    return this.http.get(this.url + "/api/searchCB/", id);
  }
  get_cuentas(usuario: number){
    return this.http.get(this.url + "/api/cuentas/searchIdUser/"+ usuario);
  }
  update_cuenta(body: any){
    return this.http.put(this.url + "/api/cuentas", body);
  }
}
