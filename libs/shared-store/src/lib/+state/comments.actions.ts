import { Action } from '@ngrx/store';
import { Entity } from './comments.reducer';

export enum CommentsActionTypes {
  LoadComments = '[Comments] Load Comments',
  CommentsLoaded = '[Comments] Comments Loaded',
  CommentsLoadError = '[Comments] Comments Load Error'
}

export class LoadComments implements Action {
  readonly type = CommentsActionTypes.LoadComments;
}

export class CommentsLoadError implements Action {
  readonly type = CommentsActionTypes.CommentsLoadError;
  constructor(public payload: any) {}
}

export class CommentsLoaded implements Action {
  readonly type = CommentsActionTypes.CommentsLoaded;
  constructor(public payload: Entity[]) {}
}

export type CommentsAction = LoadComments | CommentsLoaded | CommentsLoadError;

export const fromCommentsActions = {
  LoadComments,
  CommentsLoaded,
  CommentsLoadError
};
