import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {

  constructor(public navCtrl: NavController) {

  }

  load(): Promise<any> {
    return Promise.resolve(true);
  }

  refresh($refresher) {
    setTimeout(() => {
      this.load()
      .then(() => $refresher.complete())
    }, 3000);
  }
}
