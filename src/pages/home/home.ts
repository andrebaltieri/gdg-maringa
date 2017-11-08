import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PicturePage } from '../picture/picture';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private modalCtr: ModalController) {

  }

  showPictureModal() {
    this.modalCtr.create(PicturePage).present();
  }
}
