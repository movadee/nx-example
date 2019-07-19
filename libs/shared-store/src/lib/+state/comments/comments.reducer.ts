import { CommentsAction, CommentsActionTypes } from './comments.actions';

export const COMMENTS_FEATURE_KEY = 'comments';

/**
 * Interface for the 'Comments' data used in
 *  - CommentsState, and
 *  - commentsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CommentsState {
  talks: {};
  list: Entity[]; // list of Comments; analogous to a sql normalized table
  selectedId?: string | number; // which Comments record has been selected
  loaded: boolean; // has the Comments list been loaded
  error?: any; // last none error (if any)
}

export interface CommentsPartialState {
  readonly [COMMENTS_FEATURE_KEY]: CommentsState;
}

export const initialState: CommentsState = {
  talks: { bla1: 'blBLA1' },
  list: [],
  loaded: false
};

export function commentsReducer(
  state: CommentsState = initialState,
  action: CommentsAction
): CommentsState {
  switch (action.type) {
    case CommentsActionTypes.CommentsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }

    case CommentsActionTypes.AddComment: {
      const { list } = state;
      console.log(state);
      list.push(action.payload);
      state = {
        ...state,
        list,
        loaded: true
      };
      break;
    }
  }
  return state;
}
