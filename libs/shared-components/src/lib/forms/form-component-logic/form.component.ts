import { Component, Input, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="heroForm">
      <app-form-item
        *ngFor="let item of items.fields"
        [data]="item"
        [group]="heroForm"
      ></app-form-item>
    </form>

    <br />
    <p>heroForm value: {{ heroForm.value | json }}</p>
    <p>dirty: {{ heroForm.controls.firstName?.dirty | json }}</p>
    <p>touched: {{ heroForm.controls.firstName?.touched | json }}</p>
  `,
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.Native
  // styles: [
  //   `
  //     @import '@angular/material/prebuilt-themes/deeppurple-amber.css';
  //   `
  // ]
})
export class FormComponent {
  heroForm: FormGroup;
  @Input() formId: any;
  // public items = require('./data_2.json');
  public items = {
    fields: [
      {
        id: 'firstName',
        type: 'form-text-input',
        componentType: 'formTextInput',
        value: {
          label: 'First Name',
          placeholder: 'Jane'
        },
        data: 'Lucy',
        validation: [
          {
            type: 'required',
            message: 'First name is required',
            arguments: true
          }
        ]
      },
      {
        id: 'lastName',
        type: 'form-text-input',
        componentType: 'formTextInput',
        value: {
          label: 'Last Name',
          placeholder: 'Doe'
        },
        data: '',
        validation: [
          {
            type: 'required',
            message: 'Last Name is required',
            arguments: true
          }
        ]
      },
      {
        id: 'maidenName',
        type: 'form-text-input',
        componentType: 'formTextInput',
        value: {
          label: 'Maiden Name',
          placeholder: ''
        },
        data: '',
        validation: [
          {
            type: 'required',
            message: 'Maiden Name is required',
            arguments: true
          }
        ]
      },
      {
        id: 'docu-ui-status-complete',
        type: 'form-checkbox',
        componentType: 'formCheckbox',
        value: {
          label: 'docu-ui-status-complete',
          placeholder: ''
        },
        data: '',
        validation: []
      }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.toFormGroup(this.items);
  }

  toFormGroup(questions) {
    let group: any = {};
    let requiredArr = [];

    questions.fields.forEach(question => {
      question.validation.forEach(item => {
        item.type == 'required'
          ? requiredArr.push(Validators[item.type])
          : requiredArr.push(Validators[item.type](item.arguments));
      });
      group[question.id] = new FormControl(question.data || '', requiredArr);
    });

    this.heroForm = new FormGroup(group);
  }
}
