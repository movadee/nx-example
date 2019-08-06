import { TestBed } from '@angular/core/testing';

import { CanadaPostApiService } from './canada-post-api.service';

describe('CanadaPostApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanadaPostApiService = TestBed.get(CanadaPostApiService);
    expect(service).toBeTruthy();
  });
});
