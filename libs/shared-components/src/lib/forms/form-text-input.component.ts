// Component to be dynamically added to the DOM
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormTemplateBaseComponent } from './form-component-logic/form-template-base.component';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-form-text-input',
  template: `
    <div class="form-group" [formGroup]="group">
      <mat-form-field>
        <input
          matInput
          [placeholder]="data.value.label"
          class="form-control"
          [formControlName]="data.id"
          [errorStateMatcher]="matcher"
        />

        <mat-error *ngIf="group.controls[data.id].hasError('required')">
          {{ data.validation[0].message }}
        </mat-error>
      </mat-form-field>
    </div>
  `
})
export class FormTextInputComponent extends FormTemplateBaseComponent {
  matcher = new ErrorStateMatcher();
}
