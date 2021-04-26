import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookingTimeFormPageRoutingModule } from './cooking-time-form-routing.module';

import { CookingTimeFormPage } from './cooking-time-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookingTimeFormPageRoutingModule
  ],
  declarations: [CookingTimeFormPage]
})
export class CookingTimeFormPageModule {}
