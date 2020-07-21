import { TestBed } from '@angular/core/testing';

import { GetFundInfoService } from './get-fund-info.service';

describe('GetFundInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetFundInfoService = TestBed.get(GetFundInfoService);
    expect(service).toBeTruthy();
  });
});
