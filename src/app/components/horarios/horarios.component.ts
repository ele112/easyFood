import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Horario } from 'src/app/models/app.class';
import { PersistenciaService } from 'src/app/services/persistente.service';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss'],
})
export class HorariosComponent implements OnInit {

  horario: Horario = new Horario();


  constructor(
    private persistence: PersistenciaService,
    private alertCtrl: AlertController, 
    private modal: ModalController,
  ) { }

  ngOnInit() {
    this.horario = this.persistence.getHorario();
  }

  guardarHorario(){
    console.log(this.horario)
    this.persistence.setHorario(this.horario);
  }


  async cerrar(){
    const alert = await this.alertCtrl.create({
      header: 'Horario',
      message: '¿Esta seguro marcar como cerrado el local?',
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
            this.horario.cerrado = true;
            this.guardarHorario();
            // Eliminar PEdido

          }
        }
      ]
    })

    alert.present();
  }


  abrir(){
    this.horario.cerrado = false;
    this.guardarHorario();
  }


}
