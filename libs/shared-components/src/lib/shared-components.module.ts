import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './forms/form-component-logic/form.component';
import { SharedComponent } from './shared-components.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideModule } from 'ng-click-outside';

import { FormItemComponent } from './forms/form-component-logic/form-item.component';
import { FormTemplateBaseComponent } from './forms/form-component-logic/form-template-base.component';
import { FormTextInputComponent } from './forms/form-text-input.component';
import { FormCheckboxComponent } from './forms/form-checkbox.component';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import { environment } from '@environment';
import { StreetMapComponent } from './components/street-map/street-map.component';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   { path: '', pathMatch: 'full', component: SharedComponent }
    // ]),
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google_map_api.KEY,
      libraries: [
        'map',
        'places'
      ]
    }),
    // material design modules
    // BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: [
    // FormComponent,
    // SharedComponent,

    // components
    FormComponent,
    FormItemComponent,
    FormTemplateBaseComponent,
    FormTextInputComponent,
    FormCheckboxComponent,
    StreetMapComponent
  ],
  exports: [
    StreetMapComponent,
    // FormComponent,
    // SharedComponent, // components
    FormComponent,
    FormItemComponent,
    FormTemplateBaseComponent,
    FormTextInputComponent,
    FormCheckboxComponent,

    MatAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatRippleModule,

    ClickOutsideModule,
    AgmCoreModule
  ],
  entryComponents: [
    FormComponent,
    // SharedComponent,
    FormTextInputComponent,
    FormCheckboxComponent
  ]
})
export class SharedComponentsModule {}
