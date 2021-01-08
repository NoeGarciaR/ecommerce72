import { TestBed } from '@angular/core/testing';

import { SaleOptionsService } from './sale-options.service';

describe('SaleOptionsService', () => {
  let service: SaleOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
