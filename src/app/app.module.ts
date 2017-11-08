import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AgendaPage } from '../pages/agenda/agenda';
import { PicturePage } from '../pages/picture/picture';
import { LocationPage } from '../pages/location/location';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AgendaPage,
    PicturePage,
    LocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AgendaPage,
    PicturePage,
    LocationPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
