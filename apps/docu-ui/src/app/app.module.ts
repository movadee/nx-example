import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@bmo/shared-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedStoreModule } from '@bmo/shared-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  LOCALDOCUUI_FEATURE_KEY,
  initialState,
  localDocuUiReducer
} from './+state/local-docu-ui.reducer';
import { LocalDocuUiEffects } from './+state/local-docu-ui.effects';
import { LocalDocuUiFacade } from './+state/local-docu-ui.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ]),
    SharedComponentsModule,
    SharedStoreModule,
    MatStepperModule,
    StoreModule.forFeature(LOCALDOCUUI_FEATURE_KEY, localDocuUiReducer, {
      initialState
    }),
    // EffectsModule.forFeature(LocalDocuUiEffects)
  ],
  providers: [LocalDocuUiFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
