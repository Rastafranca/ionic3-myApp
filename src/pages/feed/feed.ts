import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  public nome_usuario: string = "Fran JAH";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somadois(num1:number, num2:number): void {
        alert(num1+num2);
  }

  ionViewDidLoad() {
    //this.somadois(1,5);
  }

}
