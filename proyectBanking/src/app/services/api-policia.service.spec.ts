import { TestBed } from '@angular/core/testing';

import { ApiPoliciaService } from './api-policia.service';

describe('ApiPoliciaService', () => {
  let service: ApiPoliciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPoliciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
