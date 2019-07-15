// Component to be dynamically added to the DOM
import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormTemplateBaseComponent } from './form-component-logic/form-template-base.component';

@Component({
  selector: 'app-form-checkbox',
  template: `
  <div class="form-group" [formGroup]="group">
    <mat-checkbox class="form-control" [formControlName]="data.id">{{data.value.label}}</mat-checkbox>
  </div>
  `
})
export class FormCheckboxComponent extends FormTemplateBaseComponent { }