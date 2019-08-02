import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { LocalDocuUiPartialState } from './local-docu-ui.reducer';
import { localDocuUiQuery } from './local-docu-ui.selectors';
import {
  ResetLocalDocuUiSteps,
  UpdateLocalDocuUiStep,
  UpdateStepLocalDocuUiIndex
} from './local-docu-ui.actions';

@Injectable()
export class LocalDocuUiFacade {
  steps$ = this.store.pipe(select(localDocuUiQuery.getSteps));

  constructor(private store: Store<LocalDocuUiPartialState>) { }

  updateStep(step_index: number, value: object) {
    this.store.dispatch(new UpdateLocalDocuUiStep({ step_index, value }));
  }

  updateStepIndex(index: number) {
    this.store.dispatch(new UpdateStepLocalDocuUiIndex(index));
  }

  resetStep() {
    this.store.dispatch(new ResetLocalDocuUiSteps());
  }
}
