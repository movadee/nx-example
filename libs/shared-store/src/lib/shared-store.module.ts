import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  COMMENTS_FEATURE_KEY,
  initialState as commentsInitialState,
  commentsReducer
} from './+state/comments.reducer';
import { CommentsEffects } from './+state/comments.effects';
import { CommentsFacade } from './+state/comments.facade';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';
import { initialState } from './+state/comments.reducer';

// @NgModule({
//   imports: [
//     CommonModule,
//     NxModule.forRoot(),
//     StoreModule.forRoot(
//       { comments: commentsReducer },
//       {
//         initialState: { comments: commentsInitialState },
//         metaReducers: !environment.production ? [storeFreeze] : []
//       }
//     ),
//     EffectsModule.forRoot([CommentsEffects]),
//     !environment.production ? StoreDevtoolsModule.instrument() : []
//   ],
//   providers: [CommentsFacade]
// })
// export class SharedStoreModule {}

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forFeature('comments', commentsReducer, { initialState }),
    EffectsModule.forFeature([CommentsEffects])
  ],
  providers: [CommentsEffects, CommentsFacade]
})
export class SharedStoreModule {}
