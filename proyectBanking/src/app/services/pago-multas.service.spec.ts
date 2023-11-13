import { TestBed } from '@angular/core/testing';

import { PagoMultasService } from './pago-multas.service';

describe('PagoMultasService', () => {
  let service: PagoMultasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoMultasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
