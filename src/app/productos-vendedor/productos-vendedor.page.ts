import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/app.class';
import { PersistenciaService } from '../services/persistente.service';

@Component({
  selector: 'app-productos-vendedor',
  templateUrl: './productos-vendedor.page.html',
  styleUrls: ['./productos-vendedor.page.scss'],
})
export class ProductosVendedorPage implements OnInit {

  productos: Producto[] = [];

  constructor(
    private persistence: PersistenciaService,
    private router: Router
  ) { }

  ngOnInit() {
    this.productos = this.persistence.getProductosAll();
  }


  detail(producto: Producto){
    
    this.router.navigateByUrl('detalle-producto', {state: {isVendedor: true, producto}})
  }


  pauseProducto(producto: Producto){
    producto.isActive = false;
    this.persistence.setProdutoPause(producto.id, producto);

    this.productos = this.persistence.getProductosAll();
  }

  reactiveProducto(producto: Producto){
    producto.isActive = true;
    this.persistence.setProdutoPause(producto.id, producto);

    this.productos = this.persistence.getProductosAll();
  }

}
