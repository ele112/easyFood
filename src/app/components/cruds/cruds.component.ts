import { Component, OnInit, Input } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';
import { WebService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-cruds',
  templateUrl: './cruds.component.html',
  styleUrls: ['./cruds.component.scss'],
})
export class CrudsComponent implements OnInit {

  @Input() crud: any;
  image: any;

  ingredientes = {
    nombre: '',
    descripcion: ''
  }

  isModify: boolean = false;

  constructor(
    private webService: WebService,
    private loading: LoadingController,
    private alertCtrl: AlertController,
    private modal: ModalController,
    private firebase: FirebaseService
  ) { }

  ngOnInit() {
    console.log(this.crud)
  }
  // (change)="uploadFile($event.target.files)"

  save(form) {
    const _form = form.form.value;
    console.log(_form);

  }


  modificarIngrediente(ing) {
    this.isModify = true;
    this.ingredientes.nombre = 'Hola';
    this.ingredientes.descripcion = 'ANY'

  }

  close() {
    this.modal.dismiss();
  }

  async uploadFile(event: FileList) {
    const loading = await this.loading.create({ message: 'Subiendo imagen' });
    loading.present();

    this.firebase.uploadFile(event);
    this.firebase.images.subscribe((data) => {

      console.log(data)
      this.image = data[0];
      loading.dismiss();
    })

  }

  async addPromo(carta) {
    const alert = await this.alertCtrl.create({
      message: 'Agregar promocion',
      inputs: [
        {
          name: '% de descuento',
          type: 'number',
          placeholder: 'Agrega el % de descuento'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => { }
        },
        {
          text: 'Agregar',
          handler: (data) => {
            this.sendPromo(carta, data);
          }
        }
      ]
    })

    alert.present();
  }

  sendPromo(carta: any, data: number): void{

  }


}
