import { Component, OnInit } from '@angular/core';
import { PopoverComponent } from '../components/popover/popover.component';
import { PopoverController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PedidosAdminComponent } from '../components/pedidos-admin/pedidos-admin.component';
import { PersistenciaService } from '../services/persistente.service';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Component({
  selector: 'app-home-vendedor',
  templateUrl: './home-vendedor.page.html',
  styleUrls: ['./home-vendedor.page.scss'],
})
export class HomeVendedorPage implements OnInit {

  public ELEMENTS = [
    { name: 'Ver Productos',            value: 'producto',       src: 'assets/images/vegetable.png'},
    { name: 'Scan pedido',                value: 'pedido',       src: 'assets/images/qr-code-scan.png' },
    { name: 'Ver pedidos',                value: 'pedido-ver',       src: 'assets/images/shop.png' },
  ];

  constructor(
    private persistence: PersistenciaService,
    private router: Router,
    private camera: Camera,
    private barcode: BarcodeScanner,
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
      this.router.navigateByUrl('productos-vendedor');
      return;
    }

    if(item == 'pedido'){
      const pedido = this.persistence.getPedido();

      let b = pedido.filter((ped) => { return ped.id == 121 });

      
      this.barcode.scan().then(barcodeData => {
        // console.log('Barcode data', barcodeData);
        
        this.router.navigateByUrl('detalle-pedido', { state: { pedido: b[0] }});




       }).catch(err => {
           console.log('Error', err);
       });
      // const options: CameraOptions = {
      //   quality: 100,
      //   destinationType: this.camera.DestinationType.FILE_URI,
      //   encodingType: this.camera.EncodingType.JPEG,
      //   mediaType: this.camera.MediaType.PICTURE
      // }
      // this.camera.getPicture(options).then((imageData) => {
      //   this.router.navigateByUrl('scan-carta');

      //  }, (err) => {
      //   // Handle error
      //  });


    }


    if(item == 'pedido-ver'){
      // this.router.navigateByUrl('pedidos');
      const modal = await this.modal.create({
        component: PedidosAdminComponent
      });

      modal.present();


    }

  }

}
