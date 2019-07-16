import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './forms/form-component-logic/form.component';
import { SharedComponent } from './shared-components.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormItemComponent } from './forms/form-component-logic/form-item.component';
import { FormTemplateBaseComponent } from './forms/form-component-logic/form-template-base.component';
import { FormTextInputComponent } from './forms/form-text-input.component';
import { FormCheckboxComponent } from './forms/form-checkbox.component';

// material design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild([
    //   { path: '', pathMatch: 'full', component: SharedComponent }
    // ]),
    ReactiveFormsModule,

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
    FormCheckboxComponent
  ],
  exports: [
    // FormComponent,
    // SharedComponent, // components
    FormComponent,
    FormItemComponent,
    FormTemplateBaseComponent,
    FormTextInputComponent,
    FormCheckboxComponent,

    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule
  ],
  entryComponents: [
    FormComponent,
    // SharedComponent,
    FormTextInputComponent,
    FormCheckboxComponent
  ]
})
export class SharedComponentsModule {}
