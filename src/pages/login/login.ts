import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { User } from 'firebase/app';
import { LoginResponse } from  '../../models/login/login-response.interface';
import { DataService } from '../../providers/data/data.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, 
              private navParams: NavParams, 
              private toast: ToastController,
              private data: DataService) {
  }

  login(event: LoginResponse){
    console.log(event);
    if (!event.error){
      this.toast.create({
        message: `Welcome to Beep, ${event.result.user.email}`,
        duration: 3000
      }).present();
      // this.navCtrl.setRoot('EditProfilePage');
      this.data.getProfile(<User>event.result).snapshotChanges().subscribe(profile => {
        console.log('Profile', profile);
        profile.payload.val() ? this.navCtrl.setRoot('TabsPage') : this.navCtrl.setRoot('EditProfilePage');
      })
    } else {
      this.toast.create({
        message: event.error.message,
        duration: 3000
      }).present();
    }
  }

}
