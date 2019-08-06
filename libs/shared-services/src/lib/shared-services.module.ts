import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CanadaPostApiService } from './services/canada-post-api.service';
import { GooglePlaceApiService } from './services/google-place-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CanadaPostApiService, GooglePlaceApiService]
})
export class SharedServicesModule {}
