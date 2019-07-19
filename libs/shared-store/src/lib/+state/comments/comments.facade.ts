import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { CommentsPartialState } from './comments.reducer';
import { commentsQuery } from './comments.selectors';
import { LoadComments, AddComment } from './comments.actions';

@Injectable({
  providedIn: 'root'
})
export class CommentsFacade {
  loaded$ = this.store.pipe(select(commentsQuery.getLoaded));
  allComments$ = this.store.pipe(select(commentsQuery.getAllComments));
  selectedComments$ = this.store.pipe(
    select(commentsQuery.getSelectedComments)
  );

  constructor(private store: Store<CommentsPartialState>) {}

  addComment(comment: string) {
    this.store.dispatch(new AddComment(comment));
  }

  loadAll() {
    this.store.dispatch(new LoadComments());
  }
}
