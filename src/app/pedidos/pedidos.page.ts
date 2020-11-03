import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PersistenciaService } from '../services/persistente.service';
import { Pedido } from '../models/app.class';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  pedidos: Pedido[] = [];
  constructor(
    private persistence: PersistenciaService,
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
    this.pedidos = this.persistence.getPedido();
  }


  goTo(pedido: Pedido){
    this.router.navigateByUrl('detalle-pedido', { state: { pedido }});
  }

}
