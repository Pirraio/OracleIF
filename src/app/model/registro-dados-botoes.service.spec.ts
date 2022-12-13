import { TestBed } from '@angular/core/testing';

import { RegistroDadosBotoesService } from './registro-dados-botoes.service';

describe('RegistroDadosBotoesService', () => {
  let service: RegistroDadosBotoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroDadosBotoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
