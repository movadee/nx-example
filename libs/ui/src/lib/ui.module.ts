import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: UiComponent }
    ])
  ],
  declarations: [UiComponent],
  exports: [UiComponent],
  entryComponents: [UiComponent]
})
export class UiModule {}
