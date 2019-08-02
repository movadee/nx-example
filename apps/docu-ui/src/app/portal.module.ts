import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from '@bmo/shared-components';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { LOCALDOCUUI_FEATURE_KEY, localDocuUiReducer, initialState } from './+state/local-docu-ui.reducer';
import { LocalDocuUiFacade } from './+state/local-docu-ui.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
    SharedComponentsModule,
    MatStepperModule,
    StoreModule.forFeature(LOCALDOCUUI_FEATURE_KEY, localDocuUiReducer, {
      initialState
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    LocalDocuUiFacade,
  ]
})
export class DucuUiModulePortal { }
