import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
   constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    ) { }

  // ============Tost message==========
  async toastShow(message: string) {

    let topToast = await this.toastCtrl.getTop();
    while (topToast) {
      if (!(await topToast.dismiss())) {
        await topToast.dismiss();
        break;
      }
      topToast = await this.toastCtrl.getTop();
    }

    let toast = await this.toastCtrl.create({
      message: message,
      keyboardClose: true,
      position: 'top',
      color : 'primary',
      duration : 4000,
      buttons: [
        {
          text: '',
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    return toast.present();
  }

  async toastShowNoTimeout(message:any) {
    
    let topToast = await this.toastCtrl.getTop();
    while (topToast) {
      if (!(await topToast.dismiss())) {
        await topToast.dismiss();
        break;
      }
      topToast = await this.toastCtrl.getTop();
    }

    let toast = await this.toastCtrl.create({
      message: message,
      keyboardClose: true,
      position: 'top',
      color : 'primary',
      duration : 8000,
      buttons: [
        {
          text: '',
          icon: 'close-circle-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    return toast.present();
  }

  async alertShow(alertOption: any) {

    return new Promise((resolve) => {
      this.alertCtrl.create({
        backdropDismiss : alertOption.backdropDismiss,
        header: alertOption.header,
        subHeader: alertOption.subHeader,
        message: alertOption.message,
        buttons: [
          {
            text: alertOption.continueBtn,
            role: 'yes',
            handler: () => {
              resolve(true);
            }
          }]
      }).then((alert: any) => {
        alert.present();
      });
    });
  }

  // ============Alert message==========
  async confirmationShow(alertOption: any) {

    return new Promise((resolve) => {
      this.alertCtrl.create({
        backdropDismiss : alertOption.backdropDismiss,
        header: alertOption.header,
        subHeader: alertOption.subHeader,
        message: alertOption.message,
        buttons: [
          {
            text: alertOption.continueBtn,
            role: 'yes',
            handler: () => {
              resolve(true);
            }
          }, {
            text: alertOption.cancelBtn,
            handler: (blah) => {
              resolve(false);
            }
          }
        ]
      }).then((alert: any) => {
        alert.present();
      });
    });
  }

  async closeToast(){
    this.toastCtrl.dismiss();
  }
}
