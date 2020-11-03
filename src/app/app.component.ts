import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { PersistenciaService } from './services/persistente.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private persistence: PersistenciaService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
      this.persistence.SetPersistence();

      this.authenticationService.authState.subscribe((state) => {

        if (state && state.auth) {
          if(state.isAdmin == null){
            this.router.navigateByUrl('home-vendedor');
            return;
          }
          if(state.isAdmin){
            this.router.navigate(['admin']);
          }else{
            this.router.navigate(['home']);
          }
        } else {
          this.router.navigate(['login']);
        }
      });


    });
  }
}
