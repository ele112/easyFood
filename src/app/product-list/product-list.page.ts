import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  lorem: string;
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, cumque quaerat? Voluptas harum distinctio '
    
  }

  modifyQuantity(action: string){
    console.log('pressed '+action);
  }

  navigateTo(page: string){
    
    this.navCtrl.navigateForward(`/${page}`, { animated: true, animationDirection: 'forward' ,queryParams: { id: 12 } });
  }


  modifySelect(type: string){
    console.log(type);
  }

}
