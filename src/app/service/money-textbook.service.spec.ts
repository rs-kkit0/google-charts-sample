import { TestBed } from '@angular/core/testing';

import { MoneyTextbookService } from './money-textbook.service';

describe('MoneyTextbookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoneyTextbookService = TestBed.get(MoneyTextbookService);
    expect(service).toBeTruthy();
  });
});
