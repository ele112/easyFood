import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanCartaPageRoutingModule } from './scan-carta-routing.module';

import { ScanCartaPage } from './scan-carta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanCartaPageRoutingModule
  ],
  declarations: [ScanCartaPage]
})
export class ScanCartaPageModule {}
