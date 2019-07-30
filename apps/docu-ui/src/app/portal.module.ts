import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@bmo/shared-components';

import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
    SharedComponentsModule,
    MatStepperModule
  ],
  bootstrap: [AppComponent]
})
export class DucuUiModulePortal {}
