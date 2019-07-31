import { DocuUiAction, DocuUiActionTypes } from './docu-ui.actions';

export const DOCUUI_FEATURE_KEY = 'docuUi';

export interface DocuUiState {
  docuUiForm: object;
}

export interface DocuUiPartialState {
  readonly [DOCUUI_FEATURE_KEY]: DocuUiState;
}

export const initialState: DocuUiState = {
  docuUiForm: {
    firstName: 'Lucy',
    lastName: '',
    maidenName: '',
    'docu-ui-status-complete': true
  }
};

export function docuUiReducer(
  state: DocuUiState = initialState,
  action: DocuUiAction
): DocuUiState {
  switch (action.type) {
    case DocuUiActionTypes.UpdateDocuUiForm: {
      state = {
        ...state,
        docuUiForm: action.payload
      };
      return state;
      break;
    }
  }
  return state;
}
