import { ActionReducerMap } from '@ngrx/store';

import {
  COMMENTS_FEATURE_KEY,
  initialState as commentsInitialState,
  commentsReducer,
  CommentsState,
  CommentsEffects,
  CommentsFacade
} from './comments';

import {
  DOCUUI_FEATURE_KEY,
  initialState as docuUiInitialState,
  docuUiReducer,
  DocuUiState,
  DocuUiEffects,
  DocuUiFacade
} from './docu-ui';

export interface State {
  [COMMENTS_FEATURE_KEY]: CommentsState,
  [DOCUUI_FEATURE_KEY]: DocuUiState
};

export const initialState = {
  [COMMENTS_FEATURE_KEY]: commentsInitialState,
  [DOCUUI_FEATURE_KEY]: docuUiInitialState
};

export const reducers: ActionReducerMap<State> = {
  [COMMENTS_FEATURE_KEY]: commentsReducer,
  [DOCUUI_FEATURE_KEY]: docuUiReducer
};

export const Effects = [
  CommentsEffects,
  DocuUiEffects
];

export const Facades = [
  CommentsFacade,
  DocuUiFacade
];
