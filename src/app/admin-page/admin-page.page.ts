import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { CrudsComponent } from '../components/cruds/cruds.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {

  public ELEMENTS = [
    { name: 'Agregar Promocion', value: 'promo' },
    { name: 'Agregar Carta', value: 'carta' },
    { name: 'Agregar Ingrediente', value: 'ingrediente' },
    { name: 'Agregar Repartidor', value: 'repartidor' },
    { name: 'Agregar Estado', value: 'estado' },
  ];
  constructor(
    private popoverController: PopoverController,
    private modal: ModalController,
    private authService: AuthenticationService,) { }

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

  async showModal(show: string){
    const modal = await this.modal.create({
      component: CrudsComponent,
      animated: true,
      componentProps: { crud: show }
    });

    modal.present();
  }

}
