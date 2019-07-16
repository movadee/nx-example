import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { CommentsPartialState } from './comments.reducer';
import {
  LoadComments,
  CommentsLoaded,
  CommentsLoadError,
  CommentsActionTypes
} from './comments.actions';

@Injectable()
export class CommentsEffects {
  @Effect() loadComments$ = this.dataPersistence.fetch(
    CommentsActionTypes.LoadComments,
    {
      run: (action: LoadComments, state: CommentsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new CommentsLoaded([]);
      },

      onError: (action: LoadComments, error) => {
        console.error('Error', error);
        return new CommentsLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CommentsPartialState>
  ) {}
}
