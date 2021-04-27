import { Injectable } from '@angular/core';

// Import Plugin capacitor
import { Plugins } from '@capacitor/core';

// utilisation du plugin storage
const { Storage } = Plugins;

// clef sur laquelle on enregistre les donnees
const STORAGE_KEY = "cooking-times";

@Injectable({
  providedIn: 'root'
})
export class CookingTimeService {

  name= "Manage cooking time"

  public cookingTimes = [];


  //Enter a new time
  public input ={
    label: null,
    time: null
  };

  constructor() { }

  public getName(){
    return this.name;
  }

  public setName(newName){
    this.name = newName; 
  }

  public async getCookingTime(){
    const data:any = await Storage.get ({ key: STORAGE_KEY});
    this.cookingTimes = JSON.parse(data.value) || [];
    return this.cookingTimes;
  }

  // creation d'un nouvelle objet avec la saisie
  public getTimeData() {
    return {
      label : this.input.label,
      time : this.input.time
    }
  }

  //add a new time of cooking
  public async addTime(data){
    this.cookingTimes.push(data);

    this.input.label = null;
    this.input.time = null;

    //Enregistrement de la liste des temps, dans l'espace de persistance gerer par storage
    
    await Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.cookingTimes)
    });
  }

  
}
