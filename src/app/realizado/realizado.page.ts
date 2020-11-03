import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-realizado',
  templateUrl: './realizado.page.html',
  styleUrls: ['./realizado.page.scss'],
})
export class RealizadoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  goTo(){
    this.router.navigateByUrl('home');
  }

}
