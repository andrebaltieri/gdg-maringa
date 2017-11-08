import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Palestrantes', component: ListPage },
      { title: 'Agenda', component: ListPage },
      { title: 'Localização', component: ListPage },
      { title: 'balta.io', component: ListPage }
    ];

  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
