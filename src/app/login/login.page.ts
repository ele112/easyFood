import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { isNullOrUndefined } from 'util';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private toast: ToastController,
    private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser(){
    // this.authService.login()
  }

  async login(forms){
    const user = forms.form.value;
    let skip = false;

    let isAdmin = null;
    if(user.email == 'admin' && user.password == 'admin'){
      isAdmin = true;
    }
    if(user.email == 'user' && user.password == 'user'){
      isAdmin = false;
    }
    
    if(user.email == 'sale' && user.password == 'sale'){
      isAdmin = null;
      skip = true;
    }
    

    if(!skip && isNullOrUndefined(isAdmin)){
      const toast = await this.toast.create({
        message: 'Usuario no valido',
        position: 'bottom',
        duration: 2000,
        animated: true,
        color: 'primary'
      });

      toast.present();
      return;
    }
    

    this.authService.login(user, isAdmin )

    console.log(user);
    
  }
}
