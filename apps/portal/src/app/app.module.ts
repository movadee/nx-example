import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
          loadChildren: '@bmo/docu-ui#AppModule'
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
    )
  ],
  declarations: [AppComponent, HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
