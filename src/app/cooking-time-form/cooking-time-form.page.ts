import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookingTimeService } from '../services/cooking-time.service';

import { Plugins, CameraResultType, CameraSource, CameraOptions } from '@capacitor/core';
import { ToastController } from '@ionic/angular';

const { Camera } = Plugins;

@Component({
  selector: 'app-cooking-time-form',
  templateUrl: './cooking-time-form.page.html',
  styleUrls: ['./cooking-time-form.page.scss'],
})
export class CookingTimeFormPage implements OnInit {

  public image;

  constructor(
      public cookingTimeService: CookingTimeService,
      private router: Router,
      private toastCtrl: ToastController
    ) {
    this.cookingTimeService.setName('Another Name');
  
   }

  ngOnInit() {
  }

  public async validateForm() {
    //todo valider la saisie
    if (!this.cookingTimeService.validateInput()){

      //afficher l'erreur dans un toast
      const toast = await this.toastCtrl.create({
        message: 'You Have to Enter Name and Time',
        color: 'danger',
        position: 'top',
        duration: 1000
      });
      toast.present();
      return;
    }

    //Save image in input
    this.cookingTimeService.input.image = this.image;
    
    //Enregistrement du noveau temps
    //en pasant par le service
    this.cookingTimeService.addTime(this.cookingTimeService.getTimeData());

    //To do redirection vers home
    this.router.navigateByUrl('/home');

  }

  public async takePicture(){
    const options: CameraOptions = {
      quality: 70,
      resultType: CameraResultType.Base64,
      correctOrientation: true,
      source: CameraSource.Camera
    };
    this.image = await Camera.getPhoto(options)

    console.log(this.image);
  }

}
