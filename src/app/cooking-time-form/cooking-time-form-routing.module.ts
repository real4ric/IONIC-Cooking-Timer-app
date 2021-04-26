import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookingTimeFormPage } from './cooking-time-form.page';

const routes: Routes = [
  {
    path: '',
    component: CookingTimeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookingTimeFormPageRoutingModule {}
