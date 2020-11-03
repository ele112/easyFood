import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Carta, Carro, Producto, Pedido } from '../models/app.class';
import { PersistenciaService } from '../services/persistente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  lorem: string;
  public static carrito: Carro = new Carro();
  _carrito: any = ProductListPage.carrito;
  

  productos: Producto[] = [];


  constructor(
    private router: Router,
    private persistence: PersistenciaService,

    private navCtrl: NavController) { }

  ngOnInit() {
    const param = this.router.getCurrentNavigation().extras.state;

    if(param.categoria){
      this.productos = this.persistence.getProductoByCategory(param.categoria);
      console.log(this.productos);
      return;
    }

    this.productos = this.persistence.getProductos();

  }

  modifyQuantity(action: string) {
    console.log('pressed ' + action);
  }

  navigateTo(page: string) {

    this.navCtrl.navigateForward(`/${page}`, { animated: true, animationDirection: 'forward', queryParams: { id: 12 } });
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


  abrirCarrito(){

    this.router.navigateByUrl('carrito', {
      state: {
        productos: this.productos.filter((prod) => { return prod.quality > 0})
      }
    });
  }


  toDesc(producto: Producto){
    this.router.navigateByUrl('detalle-producto', {state: {isVendedor: false, producto}})

  }


}
