import { Component, OnInit } from '@angular/core';
import { ProductListPage } from '../product-list/product-list.page';
import { Carta, Producto, Pedido } from '../models/app.class';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PersistenciaService } from '../services/persistente.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  _carrito: any = ProductListPage.carrito;

  productos: Producto[] = [];
  constructor(
    private persistence: PersistenciaService,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    const param = this.router.getCurrentNavigation().extras.state;
    this.productos = param.productos;

  }

  modifySelect(type: string, producto: Producto) {
    if (type == 'add') {
      producto.quality = producto.quality + 1;
      this.totalCarta(producto, true);
    }
    if (type == 'rm') {
      if (producto.quality > 0) {
        producto.quality = producto.quality - 1;
        this.totalCarta(producto, false);
      }
    }

  }

  totalCarta(producto: Producto, isAdd: boolean) {
    if (isAdd) {
      ProductListPage.carrito.total = ProductListPage.carrito.total + parseInt(producto.precio_unidad);
      this._carrito = ProductListPage.carrito;
    }
    if (!isAdd) {
      ProductListPage.carrito.total = ProductListPage.carrito.total - parseInt(producto.precio_unidad);
      this._carrito = ProductListPage.carrito;
    }
  }



  mediosPago(){
    let total = 0;
    this.productos.map((product) =>{
      total += (parseInt(product.precio_unidad) * product.quality)
    });

    const pedido: Pedido = {
      id: Math.round(Math.random()*10000),
      cantidad: this.productos.length,
      nombre: 'Alfonso Pareja',
      pedidos: this.productos,
      total: total
    }
    this.persistence.setPedido(pedido);
    this.navCtrl.navigateForward(`/medios`, { animated: true, animationDirection: 'forward'  });
  }
}
