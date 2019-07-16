import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedStoreModule } from '@bmo/shared-store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment.prod';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: '@bmo/nn2#AppModule'
        },
        {
          path: 'docu-ui',
          loadChildren: '@bmo/docu-ui#DucuUiModulePortal'
        },
        {
          path: 'nn2',
          loadChildren: '@bmo/nn2#AppModule'
        },
        {
          path: 'ui',
          loadChildren: '@bmo/ui#UiModule'
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    StoreModule.forRoot({}, { metaReducers: !environment.production ? [storeFreeze] : [] }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedStoreModule
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
