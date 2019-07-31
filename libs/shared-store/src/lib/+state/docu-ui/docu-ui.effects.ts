import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { DocuUiPartialState } from './docu-ui.reducer';

@Injectable()
export class DocuUiEffects {

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<DocuUiPartialState>
  ) {}
}
