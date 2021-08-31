import { TestBed } from '@angular/core/testing';

import { RngApiService } from './rng-api.service';

describe('RngApiService', () => {
  let service: RngApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RngApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
