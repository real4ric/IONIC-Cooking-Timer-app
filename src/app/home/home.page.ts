import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public timeLeftInSeconds = 0;                     //Time Left
  private durationInSeconds = 4 * 60;               //Duration of cooking

  private timer = null;                             // This is the timer (chronometre)


  constructor() {}

    public startTimer () {
      this.timeLeftInSeconds = this.durationInSeconds;  //Time left is = total time
      this.timer = setInterval(                         // Decrement every second
        () => {
          this.timeLeftInSeconds--;
          if (this.timeLeftInSeconds == 0){
            clearInterval(this.timer);
          }
        }, 1000
      );
    }

}
