import { ActionReducerMap } from '@ngrx/store';

import {
  COMMENTS_FEATURE_KEY,
  initialState as commentsInitialState,
  commentsReducer,
  CommentsState,
  CommentsEffects,
  CommentsFacade
} from './comments';

export interface State {
  [COMMENTS_FEATURE_KEY]: CommentsState
};

export const initialState = {
  [COMMENTS_FEATURE_KEY]: commentsInitialState
};

export const reducers: ActionReducerMap<State> = {
  [COMMENTS_FEATURE_KEY]: commentsReducer
};

export const Effects = [
  CommentsEffects
];

export const Facades = [
  CommentsFacade
];
