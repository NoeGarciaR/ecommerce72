import { TestBed } from '@angular/core/testing';

import { SalePaypalService } from './sale-paypal.service';

describe('SalePaypalService', () => {
  let service: SalePaypalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalePaypalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
