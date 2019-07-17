import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedStoreModule } from '@bmo/shared-store';
import { SharedComponentsModule } from '@bmo/shared-components';

import { UiComponent } from './ui.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UiComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    SharedStoreModule,
    SharedComponentsModule
  ],
  declarations: [UiComponent, AddCommentComponent],
  exports: [UiComponent],
  entryComponents: [UiComponent]
})
export class UiModule {}
