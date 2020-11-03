import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealizadoPageRoutingModule } from './realizado-routing.module';

import { RealizadoPage } from './realizado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealizadoPageRoutingModule
  ],
  declarations: [RealizadoPage]
})
export class RealizadoPageModule {}
