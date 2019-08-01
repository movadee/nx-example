import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  LOCALDOCUUI_FEATURE_KEY,
  LocalDocuUiState
} from './local-docu-ui.reducer';

// Lookup the 'LocalDocuUi' feature state managed by NgRx
const getLocalDocuUiState = createFeatureSelector<LocalDocuUiState>(
  LOCALDOCUUI_FEATURE_KEY
);

const getSteps = createSelector(
  getLocalDocuUiState,
  (state: LocalDocuUiState) => state.steps
);

export const localDocuUiQuery = {
  getSteps
};
