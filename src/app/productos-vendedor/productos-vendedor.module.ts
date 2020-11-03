import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosVendedorPageRoutingModule } from './productos-vendedor-routing.module';

import { ProductosVendedorPage } from './productos-vendedor.page';
import { ComponentsModule } from '../components/component.module';
import { PipeModule } from '../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipeModule,
    ProductosVendedorPageRoutingModule
  ],
  declarations: [ProductosVendedorPage]
})
export class ProductosVendedorPageModule {}
