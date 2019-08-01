import {
  LocalDocuUiAction,
  LocalDocuUiActionTypes
} from './local-docu-ui.actions';

export const LOCALDOCUUI_FEATURE_KEY = 'localDocuUi';

export interface LocalDocuUiState {
  steps: {
    values: any[],
    current_step: number
  }
};

export interface LocalDocuUiPartialState {
  readonly [LOCALDOCUUI_FEATURE_KEY]: LocalDocuUiState;
}

export const initialState: LocalDocuUiState = {
  steps: {
    values: [],
    current_step: 0
  }
};

export function localDocuUiReducer(
  state: LocalDocuUiState = initialState,
  action: LocalDocuUiAction
): LocalDocuUiState {
  switch (action.type) {
    case LocalDocuUiActionTypes.UpdateStep: {
      const { step_index, value } = action.payload;
      state.steps.values[step_index] = value;
      break;
    }
    case LocalDocuUiActionTypes.UpdateStepIndex: {
      state.steps.current_step = action.payload;
      break;
    }
    case LocalDocuUiActionTypes.ResetSteps: {
      state.steps = { ...initialState.steps };
      break;
    }
  }
  return state;
}
