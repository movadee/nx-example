import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { DocuUiPartialState } from './docu-ui.reducer';
import { docuUiQuery } from './docu-ui.selectors';
import { UpdateDocuUiForm } from './docu-ui.actions';

@Injectable()
export class DocuUiFacade {
  formValue$ = this.store.pipe(select(docuUiQuery.getDocuUiForm));
  statusComplete$ = this.store.pipe(select(docuUiQuery.getDocuUiStatusComplete));

  constructor(private store: Store<DocuUiPartialState>) {}

  updateForm(status: object) {
    this.store.dispatch(new UpdateDocuUiForm(status));
  }
}
