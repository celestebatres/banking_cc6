import { Component } from '@angular/core';
import { ApiPoliciaService } from 'src/app/services/api-policia.service';

@Component({
  selector: 'app-pago-multas',
  templateUrl: './pago-multas.component.html',
  styleUrls: ['./pago-multas.component.scss']
})
export class PagoMultasComponent {

  constructor(private policiaService: ApiPoliciaService){}

  getMultas(){
    this.policiaService.get_multas
  }

  ngOnInit(){

  }
}
