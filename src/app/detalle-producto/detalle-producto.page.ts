import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../models/app.class';
import { PersistenciaService } from '../services/persistente.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  isSaler = false;
  producto: Producto = new Producto();
  constructor(
    private toast: ToastController,
    private persistence: PersistenciaService,
    private router: Router
  ) { }

  ngOnInit() {
    const params = this.router.getCurrentNavigation().extras.state; 

    if(params && params['isVendedor']){
      this.isSaler = true;
    }

    this.producto = params.producto;

  }

  async guardarStock(){
    const toast = await this.toast.create({
      message: 'Stock Modificado',
      duration: 2000,
      position: 'top', 
      color: 'primary'
    })

    toast.present();
  }


}
