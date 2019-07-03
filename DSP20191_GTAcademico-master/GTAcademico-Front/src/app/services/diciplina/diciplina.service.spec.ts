import { TestBed, inject } from '@angular/core/testing';

import { DiciplinaService } from './dicplina.service';

describe('MedicamentoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DiciplinaService]
    });
  });

  it('should be created', inject([DiciplinaService], (service: DiciplinaService) => {
    expect(service).toBeTruthy();
  }));
});
