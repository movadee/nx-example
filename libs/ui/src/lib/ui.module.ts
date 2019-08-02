import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { SharedComponentsModule } from '@bmo/shared-components';

import { UiComponent } from './ui.component';
import { AddCommentComponent } from './components/add-comment/add-comment.component';
import { StreetMapComponent } from './components/street-map/street-map.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UiComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdlkrru2ofKjgTYPgyL7Mhgd6--0Ka8ok'
    })
  ],
  declarations: [UiComponent, AddCommentComponent, StreetMapComponent],
  exports: [UiComponent],
  entryComponents: [UiComponent]
})
export class UiModule {}
