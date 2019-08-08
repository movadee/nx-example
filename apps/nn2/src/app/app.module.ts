import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedStoreModule } from '@bmo/shared-store';
import { SharedServicesModule } from '@bmo/shared-services';
import { SharedComponentsModule } from '@bmo/shared-components';

import { AppComponent } from './app.component';
import { CanadaPostAutocompleteComponent } from './components/canada-post-autocomplete/canada-post-autocomplete.component';
import { GooglePlaceAutocompleteComponent } from './components/google-place-autocomplete/google-place-autocomplete.component';
import { SearchAddressViewComponent } from './components/search-address-view/search-address-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CanadaPostAutocompleteComponent,
    GooglePlaceAutocompleteComponent,
    SearchAddressViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedStoreModule,
    SharedServicesModule,
    SharedComponentsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
