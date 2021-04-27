import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookingTimeService } from '../services/cooking-time.service';

import { Plugins, CameraResultType, CameraSource, CameraOptions } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-cooking-time-form',
  templateUrl: './cooking-time-form.page.html',
  styleUrls: ['./cooking-time-form.page.scss'],
})
export class CookingTimeFormPage implements OnInit {

  public image;

  constructor(public cookingTimeService: CookingTimeService,
      private router: Router
    ) {
    this.cookingTimeService.setName('Another Name');
    
  
   }

  ngOnInit() {
  }

  public validateForm() {
    //tot valider la saisie

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
