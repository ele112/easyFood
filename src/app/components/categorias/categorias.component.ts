import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, ToastController, IonContent } from '@ionic/angular';
import { Categoria } from 'src/app/models/app.class';
import { PersistenciaService } from 'src/app/services/persistente.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  categoria: Categoria = new Categoria();

  categorias: Categoria[] = [];

  isModifyCategoria: boolean = false;
  constructor(
    private toast: ToastController,
    private persistence: PersistenciaService,
    private modal: ModalController,
  ) { }

  ngOnInit() {

    this.categorias = this.persistence.getCategorias();

  }


  async guardarCategoria(){


    try{

      const categoria = this.categoria;

      this.persistence.addCategoria(categoria)

      const toast = await this.toast.create({
        message: 'Categoria Guardad',
        duration: 2000,
        color: 'primary',
        position: 'top'
      })
      toast.present();

      this.categoria = new Categoria();
      this.categorias = this.persistence.getCategorias().reverse();

    }catch(error){
      const toast = await this.toast.create({
        message: 'Algo paso',
        duration: 2000
      })
      toast.present();
    }
  }


  obtenerCategorias(){
    this.categorias = this.persistence.getCategorias();
  }


  modificarCategoria(categoria: Categoria) {
    this.ionContent.scrollToTop(200);
    this.isModifyCategoria = true;
    this.categoria = categoria;

  }


  async guardarCategoriaModificado(){
    this.persistence.updateCategoria(this.categoria);
    const toast = await this.toast.create({
      message: 'Categoria Modificada',
      duration: 2000,
      color: 'primary',
      position: 'top'
    })
    toast.present();

    this.categoria = new Categoria();
    this.obtenerCategorias();

  }


  async eliminarCategoria(id){
    this.persistence.deleteCategoria(id);

    const toast = await this.toast.create({
      message: 'Categoria Eliminada',
      duration: 2000,
      color: 'primary',
      position: 'top'
    })
    toast.present();
    this.categoria = new Categoria();

    this.obtenerCategorias();
  }



}
