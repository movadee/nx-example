import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COMMENTS_FEATURE_KEY, CommentsState } from './comments.reducer';

// Lookup the 'Comments' feature state managed by NgRx
const getCommentsState = createFeatureSelector<CommentsState>(
  COMMENTS_FEATURE_KEY
);

const getLoaded = createSelector(
  getCommentsState,
  (state: CommentsState) => state.loaded
);
const getError = createSelector(
  getCommentsState,
  (state: CommentsState) => state.error
);

const getAllComments = createSelector(
  getCommentsState,
  getLoaded,
  (state: CommentsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCommentsState,
  (state: CommentsState) => state.selectedId
);
const getSelectedComments = createSelector(
  getAllComments,
  getSelectedId,
  (comments, id) => {
    const result = comments.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const commentsQuery = {
  getLoaded,
  getError,
  getAllComments,
  getSelectedComments
};
