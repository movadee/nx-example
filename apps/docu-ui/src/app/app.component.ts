import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocuUiFacade } from '@bmo/shared-store';
import { Observable, Subscription } from 'rxjs';
import { LocalDocuUiFacade } from './+state/local-docu-ui.facade';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'bmo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  isLinear = false;
  currentStepIndex = 0;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  formValue$: Observable<object>;

  subscriptions: Subscription[] = [];
  initStepSubscription: Subscription;

  constructor(private _formBuilder: FormBuilder, private _sharedDocuUi: DocuUiFacade, private _localDocuUi: LocalDocuUiFacade) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.formValue$ = this._sharedDocuUi.formValue$;
    this.initStepSubscription = this._localDocuUi.steps$.subscribe(steps => {
      this.currentStepIndex = steps.current_step;
      if (steps.values[0])
        this.firstFormGroup.setValue(steps.values[0]);
      if (steps.values[1])
        this.secondFormGroup.setValue(steps.values[1]);
      if (this.initStepSubscription)
        this.initStepSubscription.unsubscribe();
    });

    this.subscriptions = [
      this.firstFormGroup.valueChanges.subscribe(value => this._localDocuUi.updateStep(0, value)),
      this.secondFormGroup.valueChanges.subscribe(value => this._localDocuUi.updateStep(1, value)),
    ];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  formValueChanged(value: any) {
    this._sharedDocuUi.updateForm(value);
  }

  selectionChanged(event: StepperSelectionEvent) {
    this.currentStepIndex = event.selectedIndex;
    this._localDocuUi.updateStepIndex(event.selectedIndex);
  }

  resetSteps() {
    this.currentStepIndex = 0;
    this._localDocuUi.resetStep();
  }
}
