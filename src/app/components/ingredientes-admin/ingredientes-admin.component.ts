import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, IonContent, ToastController } from '@ionic/angular';
import { Ingrediente } from 'src/app/models/app.class';
import { PersistenciaService } from 'src/app/services/persistente.service';

@Component({
  selector: 'app-ingredientes-admin',
  templateUrl: './ingredientes-admin.component.html',
  styleUrls: ['./ingredientes-admin.component.scss'],
})
export class IngredientesAdminComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  ingrediente: Ingrediente = new Ingrediente();

  ingredientes: Ingrediente[] = [];
  isModifyIngrediente: boolean = false;

  constructor(
    private toast: ToastController,
    private persistence: PersistenciaService,
    private modal: ModalController
  ) { }

  ngOnInit() {
    this.ingredientes = this.persistence.getIngredientes();
  }


  modificarIngrediente(ingrediente: Ingrediente) {
    this.ionContent.scrollToTop(200);
    this.isModifyIngrediente = true;
    this.ingrediente = ingrediente;

  }

  async guardarIngredienteModificado(){
    this.persistence.updateIngrediente(this.ingrediente);
    const toast = await this.toast.create({
      message: 'Ingrediente Modificado',
      duration: 2000,
      color: 'primary',
      position: 'top'
    })
    toast.present();

    this.ingrediente = new Ingrediente();
    this.ingredientes = this.persistence.getIngredientes();
  }

  async eliminarIngrediente(id){
    this.persistence.deleteIngrediente(id);
    const toast = await this.toast.create({
      message: 'Ingrediente eliminado',
      duration: 2000,
      color: 'primary',
      position: 'top'
    })
    toast.present();

    this.ingrediente = new Ingrediente();
    this.ingredientes = this.persistence.getIngredientes();
  }

  async guardarIngrediente(){

    try{

      this.persistence.addIngrediente(this.ingrediente);

      this.ingredientes = this.persistence.getIngredientes();
      const toast = await this.toast.create({
        message: 'Ingrediente guardado',
        duration: 2000,
        color: 'primary',
        position: 'top'
      });
      toast.present();
      
      this.ingrediente = new Ingrediente();
      this.ingredientes = this.persistence.getIngredientes().reverse();

    }catch(error){
      const toast = await this.toast.create({
        message: 'Algo paso',
        duration: 2000,
        color: 'primary',
        position: 'top'
      });
      toast.present();
    }
  }


}
