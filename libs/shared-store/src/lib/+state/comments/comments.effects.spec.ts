import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CommentsEffects } from './comments.effects';
import { LoadComments, CommentsLoaded } from './comments.actions';

describe('CommentsEffects', () => {
  let actions: Observable<any>;
  let effects: CommentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CommentsEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CommentsEffects);
  });

  describe('loadComments$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadComments() });
      expect(effects.loadComments$).toBeObservable(
        hot('-a-|', { a: new CommentsLoaded([]) })
      );
    });
  });
});
