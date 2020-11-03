import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductListPageRoutingModule } from './product-list-routing.module';

import { ProductListPage } from './product-list.page';
import { PipeModule } from '../pipes/pipes.module';
import { IonBottomDrawerModule } from 'ion-bottom-drawer';
import { ComponentsModule } from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipeModule,
    ComponentsModule,
    IonBottomDrawerModule,
    ProductListPageRoutingModule
  ],
  declarations: [
    ProductListPage
  ]
})
export class ProductListPageModule {}
