import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medios',
  templateUrl: './medios.page.html',
  styleUrls: ['./medios.page.scss'],
})
export class MediosPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }



  realizado(){
    this.router.navigateByUrl('realizado');
  }

}
