import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { PersistenciaService } from '../services/persistente.service';
import { Pedido } from '../models/app.class';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {

  pedidos: Pedido[] = [];
  constructor(
    private persistence: PersistenciaService,
    private router: Router
  ) { }

  ngOnInit() {
    const data = this.router.getCurrentNavigation().extras.state;
    console.log(data);
    this.pedidos = data.pedido;

    // const pedidos = this.persistence.getPedido();
    // this.pedidos = pedidos.filter((pedido) => {
    //   return pedido.id == data.id
    // });


  }

}
