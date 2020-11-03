import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, LoadingController, ToastController, IonContent } from '@ionic/angular';
import { PersistenciaService } from 'src/app/services/persistente.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Producto, Categoria } from 'src/app/models/app.class';
import { isNumber } from 'util';
import * as _ from 'lodash';

@Component({
  selector: 'app-productos-admin',
  templateUrl: './productos-admin.component.html',
  styleUrls: ['./productos-admin.component.scss'],
})
export class ProductosAdminComponent implements OnInit {
  @ViewChild(IonContent, { static: false }) ionContent: IonContent;

  ingredientes: any[] = [];
  productos: Producto[] = [];


  producto: Producto = new Producto();
  categorias: Categoria[] = []

  //Imagen
  imageIsUpload: boolean = false;
  imageUrl: string;
  isModifyProducto: boolean = false;
  constructor(
    private toastCtrl: ToastController,
    private persistence: PersistenciaService,
    private modal: ModalController,
    private firebase: FirebaseService,
    private loading: LoadingController
  ) { }

  ngOnInit() {
    console.log('aqui')
    this.ingredientes = this.persistence.getIngredientes();
    this.productos = this.persistence.getProductos();
    this.categorias = this.persistence.getCategorias();

    console.log(this.ingredientes)
    console.log(this.productos)
  } 


  async subirImagen(event) {
    const loading = await this.loading.create({ message: 'Subiendo imagen' });
    loading.present();

    this.firebase.subirImagen(event);
    this.firebase.taskUpload.subscribe(async(porcentaje) => {
      loading.message = "Subiendo imagen "+Math.round(porcentaje)+"%";

      if(porcentaje === 100){
        loading.message = "Obteniendo imagen";
        await this.waitingFor(3000);

        this.firebase.fileRef.subscribe((url) => {
          console.log(url);
          this.imageIsUpload = true;
          this.imageUrl = url;
          loading.dismiss();
          
        });
      }

    });
  }


  async guardarProducto(){
    try{
      const toast = await this.toastCtrl.create({duration: 2000, position: 'top', color: 'primary'});
      const _form = this.producto;
      
      const _ingre: any[] = _form.ingredientes;

      _form.ingredientes = _.map(_ingre, (ingId) => {
        return this.ingredientes.filter((ingrediente) => {
          return ingrediente.id == ingId;
        })[0];
      });


      if(!isNumber(_form.precio_unidad)){
        toast.message = "El precio debe ser numerico";
        return toast.present();
      }

      if(!this.imageIsUpload){
        toast.message = "Debe subir una imagen";
        return toast.present();
      }



      const producto: Producto = {
        id: Math.round(Math.random() * 1000),
        nombre: _form.nombre,
        descripcion: _form.descripcion,
        precio_unidad: _form.precio_unidad,
        id_foto: 1,
        ingredientes: _form.ingredientes,
        urlFoto: this.imageUrl,
        id_promocion: _form.id_promocion,
        promocion: _form.promocion,
        categoria: _form.categoria,
        isActive:true
      }

      console.log(producto);
      this.persistence.addProductos(producto);

      toast.message = 'Producto guardado!';
      toast.present();


      this.modal.dismiss();


    }catch (error){
      console.log(error);
      const toast = await this.toastCtrl.create({
        message: "Algo paso",
        duration: 2000
      });
      toast.present();
    }
  }


  modificarProducto(producto: Producto){
    this.ionContent.scrollToTop(200);
    this.isModifyProducto = true;
    this.producto = producto;
    let ids: any[] = _.map(producto.ingredientes, (item) => { return item.id });
    var multi = document.getElementById('multiValue');
    multi['value'] = ids;
  }




  // utils
  waitingFor(timer: number){
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve('Ok');
      }, timer);
    })
  }


}
