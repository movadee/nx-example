import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@bmo/shared-components';

import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { SharedStoreModule } from '@bmo/shared-store';

@NgModule({
  declarations: [AppComponent, AddCommentComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
    // RouterModule.forChild([]),
    SharedStoreModule,
    SharedComponentsModule,
  ],
  bootstrap: [AppComponent]
})
export class DucuUiModulePortal {}
