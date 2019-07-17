import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedStoreModule } from '@bmo/shared-store';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedStoreModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
