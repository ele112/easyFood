import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover.component';
import { PopoverController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CategoriasComponent } from '../components/categorias/categorias.component';
import { PedidosAdminComponent } from '../components/pedidos-admin/pedidos-admin.component';
import { HorariosComponent } from '../components/horarios/horarios.component';
import { ProductosAdminComponent } from '../components/productos-admin/productos-admin.component';
import { IngredientesAdminComponent } from '../components/ingredientes-admin/ingredientes-admin.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {


  public ELEMENTS = [
    { name: 'Productos', value: 'producto',       src: 'assets/images/vegetable.png'},
    { name: 'Categoria', value: 'categoria',       src: 'assets/images/category.png' },
    { name: 'Pedidos', value: 'pedido',       src: 'assets/images/shop.png' },
    { name: 'Horario', value: 'horario',       src: 'assets/images/stopwatch.png' },
    { name: 'Ingredientes', value: 'ingrediente',       src: 'assets/images/flour.png' },

  ];


  constructor(
    private router: Router,
    private modal: ModalController,
    private popoverController: PopoverController
  ) { }

  ngOnInit() {
  }

  async cerrarSesion(ev: any){
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }



  async showModal(item: string){
    
    if(item == 'producto'){
      const modal = await this.modal.create({
        component: ProductosAdminComponent
      });
      modal.present();

      return;
    }
    
    if(item == 'categoria'){
      const modal = await this.modal.create({
        component: CategoriasComponent
      });
      modal.present();

      return;
    }
    
    if(item == 'pedido'){
      const modal = await this.modal.create({
        component: PedidosAdminComponent
      });
      modal.present();

      return;
    }
    
    if(item == 'horario'){
      const modal = await this.modal.create({
        component: HorariosComponent
      });
      modal.present();

      return;
    }
    if(item == 'ingrediente'){
      const modal = await this.modal.create({
        component: IngredientesAdminComponent
      });
      modal.present();

      return;
    }


  }


}
