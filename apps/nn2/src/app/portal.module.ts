import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedServicesModule } from '@bmo/shared-services';
import { SharedComponentsModule } from '@bmo/shared-components';
import { SharedStoreModule } from '@bmo/shared-store';

import { AppComponent } from './app.component';
import { CanadaPostAutocompleteComponent } from './components/canada-post-autocomplete/canada-post-autocomplete.component';
import { GooglePlaceAutocompleteComponent } from './components/google-place-autocomplete/google-place-autocomplete.component';

@NgModule({
  declarations: [
    AppComponent,
    CanadaPostAutocompleteComponent,
    GooglePlaceAutocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
    SharedServicesModule,
    SharedComponentsModule,
    SharedStoreModule
  ]
})
export class AppModule { }
