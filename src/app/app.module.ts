import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule, MatSortModule, MatPaginatorModule} from '@angular/material'
import {DatePipe} from '@angular/common';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { PackageInquiryComponent } from './package-inquiry/package-inquiry.component';
import { DemoTutorialComponent } from './demo-tutorial/demo-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageInquiryComponent,
    DemoTutorialComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
        path:'',
        component: PackageInquiryComponent
      },
      {
        path: 'test',
        component: DemoTutorialComponent
      }
  ])
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
