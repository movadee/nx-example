import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CommentsEffects } from './comments.effects';
import { CommentsFacade } from './comments.facade';

import { commentsQuery } from './comments.selectors';
import { LoadComments, CommentsLoaded } from './comments.actions';
import {
  CommentsState,
  Entity,
  initialState,
  commentsReducer
} from './comments.reducer';

interface TestSchema {
  comments: CommentsState;
}

describe('CommentsFacade', () => {
  let facade: CommentsFacade;
  let store: Store<TestSchema>;
  let createComments;

  beforeEach(() => {
    createComments = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('comments', commentsReducer, { initialState }),
          EffectsModule.forFeature([CommentsEffects])
        ],
        providers: [CommentsFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(CommentsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allComments$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allComments$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `CommentsLoaded` to manually submit list for state management
     */
    it('allComments$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allComments$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new CommentsLoaded([createComments('AAA'), createComments('BBB')])
        );

        list = await readFirst(facade.allComments$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
