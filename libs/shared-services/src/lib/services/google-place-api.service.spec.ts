import { TestBed } from '@angular/core/testing';

import { GooglePlaceApiService } from './google-place-api.service';

describe('GooglePlaceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GooglePlaceApiService = TestBed.get(GooglePlaceApiService);
    expect(service).toBeTruthy();
  });
});
