import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '@bmo/shared-components';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent
      }
    ]),
    // RouterModule.forChild([]),
    SharedComponentsModule,
  ],
  bootstrap: [AppComponent]
})
export class DucuUiModulePortal {}
