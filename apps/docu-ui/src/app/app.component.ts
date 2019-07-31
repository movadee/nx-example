import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocuUiFacade } from '@bmo/shared-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  formValue$: Observable<object>;

  constructor(private _formBuilder: FormBuilder, private _docuUi: DocuUiFacade) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.formValue$ = this._docuUi.formValue$;
  }

  formValueChanged(value: any) {
    this._docuUi.updateForm(value);
  }
}
