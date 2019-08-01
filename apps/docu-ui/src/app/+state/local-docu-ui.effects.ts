import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { LocalDocuUiPartialState } from './local-docu-ui.reducer';

@Injectable()
export class LocalDocuUiEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<LocalDocuUiPartialState>
  ) {}
}
