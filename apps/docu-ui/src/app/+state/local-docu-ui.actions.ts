import { Action } from '@ngrx/store';

export enum LocalDocuUiActionTypes {
  ResetSteps = '[LocalDocuUi] Reset Steps',
  UpdateStep = '[LocalDocuUi] Update Step',
  UpdateStepIndex = '[LocalDocuUi] Update Step Index'
}

export class ResetLocalDocuUiSteps implements Action {
  readonly type = LocalDocuUiActionTypes.ResetSteps;
}

export class UpdateLocalDocuUiStep implements Action {
  readonly type = LocalDocuUiActionTypes.UpdateStep;
  constructor(public payload: { step_index: number, value: object }) { }
}

export class UpdateStepLocalDocuUiIndex implements Action {
  readonly type = LocalDocuUiActionTypes.UpdateStepIndex;
  constructor(public payload: number) { }
}

export type LocalDocuUiAction =
  | UpdateLocalDocuUiStep
  | ResetLocalDocuUiSteps
  | UpdateStepLocalDocuUiIndex

export const fromLocalDocuUiActions = {
  UpdateLocalDocuUiStep,
  ResetLocalDocuUiSteps,
  UpdateStepLocalDocuUiIndex
};
