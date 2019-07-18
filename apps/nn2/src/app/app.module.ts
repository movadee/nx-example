import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SharedStoreModule } from '@bmo/shared-store';
import { CommonModule } from '@angular/common';

// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     CommonModule,
//     SharedStoreModule,
//     RouterModule.forChild([
//       {
//         path: '',
//         component: AppComponent
//       }
//     ]),
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule {}

// import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppComponent } from './app.component';
// import { RouterModule } from '@angular/router';
// import { SharedComponentsModule } from '@bmo/shared-components';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    SharedStoreModule,
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      }
    ])
    // SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
