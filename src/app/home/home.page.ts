import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ModalController, IonRouterOutlet, Platform, NavController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../components/popover/popover.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { SearchViewComponent } from '../components/search-view/search-view.component';
import { Router } from '@angular/router';
import { PersistenciaService } from '../services/persistente.service';
import { Categoria, Producto } from '../models/app.class';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideConfig = {
    slidesPerView: 1.2,
    centeredSlides: false,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  }
  slideConfigMedium = {
    slidesPerView: 2.5,
    centeredSlides: false,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    }
  }


  categorias: Categoria[] = [];
  promociones: Producto[] = [];
  pedido: boolean = false;

  isCerrado: boolean = false;

  constructor(private statusBar: StatusBar, 
    private router: Router,
    private platform: Platform,
    private persistence: PersistenciaService,
    private navCtrl: NavController,
    private popoverController: PopoverController,
    public modalController: ModalController) {
    this.statusBar.overlaysWebView(true);
    this.statusBar.backgroundColorByHexString('#2AC769');

  }

  ionViewDidEnter() {
    this.slideConfig.slidesPerView = this.platform.width() > 800 ? 2.2 : 1.2;

    this.isCerrado = this.persistence.getHorario().cerrado;

    this.categorias = this.persistence.getCategorias();
    this.promociones = this.persistence.getPromos();
    console.log(this.promociones)
    this.pedido = this.persistence.getPedido().length > 0 ? true : false;


  }

  ionViewDieLeave() {
    this.platform.resize.unsubscribe();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  swipeEvent(ev: any){
    console.log(ev);
  }

  async presentSearchView() {
    // console.log('Clicked')
    const modal = await this.modalController.create({
      component: SearchViewComponent,
      swipeToClose: true,
      animated: true
    });
    return await modal.present();
  }

  async presentProfileModal(){
    const modal = await this.modalController.create({
      component: PerfilComponent,
      swipeToClose: true,
      animated: true
    });
    return await modal.present();
  }


  navigateTo(page: string){
    this.router.navigateByUrl(`/${page}`, {state: { categoria: null } });
  }

  
  openPedido(){
    this.router.navigateByUrl('pedidos');
  }


  toCategory(id: number){
    this.router.navigateByUrl('productos', {state: { categoria: id }})
  }

}
