import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/app.class';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { PersistenciaService } from 'src/app/services/persistente.service';

@Component({
  selector: 'app-pedidos-admin',
  templateUrl: './pedidos-admin.component.html',
  styleUrls: ['./pedidos-admin.component.scss'],
})
export class PedidosAdminComponent implements OnInit {

  pedido: Pedido = new Pedido();

  pedidos: Pedido[] = [];
  constructor(
    private modal: ModalController,
    private router: Router,
    private persistence: PersistenciaService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.pedidos = this.persistence.getPedido();
    console.log(this.pedidos)
  }



  async eliminarPedido(id: number){
    const alert = await this.alertCtrl.create({
      header: 'Pedido',
      message: '¿Esta seguro de eliminar el pedido?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          handler: () => {}
        },
        {
          text: 'Aceptar',
          role: 'Aceptar',
          handler: async () => {

            // Eliminar PEdido

          }
        }
      ]
    })

    alert.present();
    

  }

  detallePedido(pedido){
    this.modal.dismiss();
    this.router.navigateByUrl('detalle-pedido', { state: { 
      pedido
    }});
  }

}
