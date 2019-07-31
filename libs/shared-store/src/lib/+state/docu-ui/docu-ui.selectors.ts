import { createFeatureSelector, createSelector, State } from '@ngrx/store';
import { DOCUUI_FEATURE_KEY, DocuUiState } from './docu-ui.reducer';

// Lookup the 'DocuUi' feature state managed by NgRx
const getDocuUiState = createFeatureSelector<DocuUiState>(DOCUUI_FEATURE_KEY);

const getDocuUiForm = createSelector(
  getDocuUiState,
  (State: DocuUiState) => State.docuUiForm
);

const getDocuUiStatusComplete = createSelector(
  getDocuUiState,
  (state: DocuUiState) => state.docuUiForm['docu-ui-status-complete']
);

export const docuUiQuery = {
  getDocuUiForm,
  getDocuUiStatusComplete
};
