import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WelcomeFoodPageRoutingModule } from './welcome-food-routing.module';

import { WelcomeFoodPage } from './welcome-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WelcomeFoodPageRoutingModule
  ],
  declarations: [WelcomeFoodPage]
})
export class WelcomeFoodPageModule {}
