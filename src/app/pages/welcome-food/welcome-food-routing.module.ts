import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeFoodPage } from './welcome-food.page';

const routes: Routes = [
  {
    path: '',
    component: WelcomeFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomeFoodPageRoutingModule {}
