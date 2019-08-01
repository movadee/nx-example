import { Action } from '@ngrx/store';

export enum DocuUiActionTypes {
  UpdateDocuUiForm = '[DocuUi] DocuUi Form Update'
}

export class UpdateDocuUiForm implements Action {
  readonly type = DocuUiActionTypes.UpdateDocuUiForm;
  constructor(public payload: object) {
    console.log(payload);
  }
}

export type DocuUiAction = UpdateDocuUiForm;

export const fromDocuUiActions = {
  UpdateDocuUiForm
};
