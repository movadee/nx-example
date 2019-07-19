import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NxModule } from '@nrwl/angular';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';

import { reducers, initialState, Effects, Facades } from './+state';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      reducers,
      {
        initialState,
        metaReducers: []
      }
    ),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    }),
  ],
  providers: [
    ...Effects,
    ...Facades
  ]
})
export class SharedStoreModule { }
