import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public timeLeftInSeconds = 0;                     //Time Left
  private durationInSeconds = 4 * 60;               //Duration of cooking

  public timer;                             // This is the timer (chronometre)


  constructor() {}

    public startTimer () {
      if(this.timeLeftInSeconds == 0) {
      this.timeLeftInSeconds = this.durationInSeconds;  //Time left is = total time
    }
        this.timer = setInterval(                         // Decrement every second
            () => {
              this.timeLeftInSeconds--;
              if (this.timeLeftInSeconds == 0){
                clearInterval(this.timer);
                this.timer=null;
              }
            }, 1000
          );
        }


    public displayTime(timeInSeconds) {
      let minutes = Math.floor (timeInSeconds / 60);
      let seconds = timeInSeconds % 60; 

      return minutes + ' : ' + seconds;
    }

    public stopTimer() {
      clearInterval(this.timer);
      this.timeLeftInSeconds = 0;
      this.timer=null;
    }

    public pauseTimer(){
      clearInterval(this.timer);
      this.timer=null;
    }

}
