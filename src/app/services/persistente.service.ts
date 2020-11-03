import { Injectable } from '@angular/core';
import { IApp, Ingrediente, Producto, Categoria, Horario, Pedido } from '../models/app.class';



@Injectable()
export class PersistenciaService {


    public static db: IApp = null;
    constructor(){

    }


    public getIngredientes(){
        return PersistenciaService.db.ingredientes;
    }

    getProductoByCategory(id: any){
        let pro = null;
        pro = PersistenciaService.db.productos.filter((item) => {
            return item.categoria == id;
        });

        return pro.reverse();
    }

    public getProductosAll(){
        return PersistenciaService.db.productos.reverse();
    }

    // public setStock(producto: Producto){
        
    // }

    public getProductos(){
        const productos = PersistenciaService.db.productos.filter((prod) => {
            return prod.isActive == true;
        })
        return productos.reverse();
    }

    public getCategorias(){
        return PersistenciaService.db.categorias;
    }
    public getPedido(){
        return PersistenciaService.db.pedidos;
    }

    public addCategoria(categoria: Categoria){
        PersistenciaService.db.categorias.push(categoria);
    }

    public getHorario(){
        return PersistenciaService.db.horario;
    }

    public setHorario(horario: Horario){
        PersistenciaService.db.horario = horario;
        
    }

    public setPedido(pedido: Pedido){
        PersistenciaService.db.pedidos.push(pedido);
    }

    public setProdutoPause(id: number, producto: Producto){
        const index = PersistenciaService.db.productos.findIndex((item) => { return item.id == id});
        PersistenciaService.db.productos.splice(index, 1);
        
        PersistenciaService.db.productos.push(producto);
    }


    public getPromos(){
        let promo = null;
        promo = PersistenciaService.db.productos.filter((item) => {
            return (item.promocion != null && item.isActive == true) ;
        });
        return promo.reverse();
    }

    public addIngrediente(ingrediente: Ingrediente){
        PersistenciaService.db.ingredientes.push(ingrediente);
    }

    public addProductos(productos: Producto){
        PersistenciaService.db.productos.push(productos);
    }

    public updateCategoria(categoria: Categoria){
        const index = PersistenciaService.db.categorias.findIndex((item) => { return item.id == categoria.id });

        PersistenciaService.db.categorias[index] = categoria;
    }

    public deleteCategoria(id: number){
        const index = PersistenciaService.db.categorias.findIndex((item) => { return item.id == id });

        PersistenciaService.db.categorias.splice(index, 1);
    }

    public updateIngrediente(ingrediente: Ingrediente){
        const index = PersistenciaService.db.ingredientes.findIndex((item) => { return item.id == ingrediente.id });

        PersistenciaService.db.ingredientes[index] = ingrediente;
    }

    public deleteIngrediente(id: number){
        console.log(id)
        const index = PersistenciaService.db.ingredientes.findIndex((item) => { return item.id == id });

        PersistenciaService.db.ingredientes.splice(index, 1);
    }

    // 1 sandwich
    // 2 Cafe
    // 3 bebida
    // 4

    public SetPersistence(){
        PersistenciaService.db = {
            productos: [
                {
                    id: 1,
                    categoria: 1,
                    nombre: 'Aliado',
                    descripcion: 'Sandwich',
                    ingredientes: [
                        {
                            id: 1,
                            nombre: 'Queso',
                            descripcion: ''
                        },
                        {
                            id: 2,
                            nombre: 'Jamon',
                            descripcion: ''
                        }
                    ],
                    promocion: 'si',
                    id_promocion: null,
                    quality: 0,
                    id_foto: null,
                    urlFoto: 'https://www.sancamilo.com/img/cms/Catalogo_2019_retocadas_1_feb/nuevos_productos20feb2019/ALIADO-MARRAQUETA.jpg',
                    precio_unidad: '1200',
                    cantidad: 20,
                    isActive: true
                },
                {
                    id: 3,
                    categoria: 1,
                    quality: 0,
                    nombre: 'completo',
                    descripcion: 'completo italiano ',
                    ingredientes: [
                        {
                            id: 9,
                            nombre: 'pan completo',
                            descripcion: ''
                        },
                        {
                            id: 26,
                            nombre: 'salchicha',
                            descripcion: ''
                        },
                        {
                            id: 16,
                            nombre: 'tomate',
                            descripcion: ''
                        },
                        {
                            id: 18,
                            nombre: 'palta',
                            descripcion: ''
                        },
                        {
                            id: 21,
                            nombre: 'mayonesa',
                            descripcion: ''
                        },
                    ],

                    promocion: 'si',
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://www.concepcionchile.cl/images_content/receta-completo-italiano.jpg',
                    precio_unidad: '1100',
                    cantidad: 20,
                    isActive: true

                },
                {
                    id: 4,
                    quality: 0,
                    nombre: 'té',
                    categoria: 2,
                    descripcion: 'bebida caliente',
                    ingredientes: [
                        {
                            id: 32,
                            nombre: 'té ceylan',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://media.metrolatam.com/2019/10/09/bajardepeso-23ff782fdf652705f273ba42acc1255b-600x400.jpg',
                    precio_unidad: '1350',
                    cantidad: 20,
                    isActive: true
                },
                {
                    id: 5,
                    quality: 0,
                    nombre: 'té verde',
                    categoria: 2,
                    descripcion: 'bebida caliente',
                    ingredientes: [
                        {
                            id: 33,
                            nombre: 'té verde',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://www.65ymas.com/uploads/s1/16/49/43/bigstock-healthy-green-tea-cup-with-tea-15743465.jpeg',
                    precio_unidad: '800',
                    cantidad: 20,
                    isActive: true
                },
                {
                    id: 6,
                    nombre: 'Hot dog',
                    quality: 0,
                    categoria: 3,
                    descripcion: 'completo solo con aderesos',
                    ingredientes: [
                        {
                            id: 9,
                            nombre: 'pan completo',
                            descripcion: ''
                        },
                        {
                            id: 26,
                            nombre: 'salchicha',
                            descripcion: ''
                        },
                        {
                            id: 19,
                            nombre: 'ketchup',
                            descripcion: ''
                        },
                        {
                            id: 20,
                            nombre: 'mostaza',
                            descripcion: ''
                        },
                        {
                            id: 21,
                            nombre: 'mayonesa',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://placeralplato.com/files/2015/11/Pan-para-hot-dogs-640x480.jpg?width=1200&enable=upscale',
                    precio_unidad: '850',
                    cantidad: 20,
                    isActive: true

                },
                {
                    id: 7,
                    categoria: 1,
                    quality: 0,
                    nombre: 'pan con queso',
                    descripcion: 'sandwich',
                    ingredientes: [
                        {
                            id: 6,
                            nombre: 'pan hallula',
                            descripcion: ''
                        },
                        {
                            id: 15,
                            nombre: 'queso mantecoso',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://assets.kraftfoods.com/recipe_images/opendeploy/106866_MXM_K2526V16S_OR1_H_640x428.jpg',
                    precio_unidad: '700',
                    cantidad: 20,
                    isActive: true

                },
                {
                    id: 8,
                    categoria: 1,
                    quality: 0,
                    nombre: 'sandwich atun',
                    descripcion: 'sandwich',
                    ingredientes: [
                        {
                            id: 7,
                            nombre: 'pan pita',
                            descripcion: ''
                        },
                        {
                            id: 3,
                            nombre: 'Atun',
                            descripcion: ''
                        },
                        {
                            id: 1,
                            nombre: 'Lechuga',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://okdiario.com/img/recetas/2017/10/04/sandwich-de-atun-casero.jpg',
                    precio_unidad: '900',
                    cantidad: 20,
                    isActive: true

                },
                {
                    id: 9,
                    categoria: 1,
                    quality: 0,
                    nombre: 'sandwich fresco ',
                    descripcion: 'sandwich queso fresco con tomate',
                    ingredientes: [
                        {
                            id: 8,
                            nombre: 'pan molde',
                            descripcion: ''
                        },
                        {
                            id: 13,
                            nombre: 'queso fresco',
                            descripcion: ''
                        },
                        {
                            id: 16,
                            nombre: 'tomate',
                            descripcion: ''
                        },
                    ],
                    promocion: null,
                    id_promocion: null,
                    id_foto: null,
                    urlFoto: 'https://previews.123rf.com/images/wideonet/wideonet1711/wideonet171100065/90667648-s%C3%A1ndwich-fresco-con-jam%C3%B3n-y-queso-sobre-fondo-de-madera.jpg',
                    precio_unidad: '1100',
                    cantidad: 20,
                    isActive: true

                }


            ],
            ingredientes: [
                {
                    id: 1,
                    nombre: 'Lechuga',
                    descripcion: ''
                },
                {
                    id: 2,
                    nombre: 'Espinaca',
                    descripcion:''
                },
                {
                    id: 3,
                    nombre: 'Atun',
                    descripcion:''
                },
                {
                    id: 4,
                    nombre: 'zanahoria',
                    descripcion:''
                },
                {
                    id: 5,
                    nombre: 'cebolla',
                    descripcion: ''
                },
                {
                    id:6 ,
                    nombre: 'pan hallula',
                    descripcion: ''
                },
                {
                    id: 7,
                    nombre: 'pan pita',
                    descripcion: ''
                },
                {
                    id:8 ,
                    nombre: 'pan molde',
                    descripcion: ''
                },
                {
                    id: 9,
                    nombre: 'pan completo',
                    descripcion: ''
                },
                {
                    id: 10,
                    nombre: 'jamon',
                    descripcion: ''
                },
                {
                    id: 11,
                    nombre: 'jamon pierna',
                    descripcion: ''
                },
                {
                    id: 12,
                    nombre: 'queso',
                    descripcion: ''
                },
                {
                    id: 13,
                    nombre: 'queso fresco',
                    descripcion: ''
                },
                {
                    id: 14,
                    nombre: 'queso cheddar',
                    descripcion: ''
                },
                {
                    id:15 ,
                    nombre: 'queso mantecoso',
                    descripcion: ''
                },
                {
                    id: 16,
                    nombre: 'tomate',
                    descripcion: ''
                },
                {
                    id: 17,
                    nombre: 'cebolla morada',
                    descripcion: ''
                },
                {
                    id: 18,
                    nombre: 'palta',
                    descripcion: ''
                },
                {
                    id: 19,
                    nombre: 'ketchup',
                    descripcion: ''
                },
                {
                    id:20 ,
                    nombre: 'mostaza',
                    descripcion: ''
                },
                {
                    id: 21,
                    nombre: 'mayonesa',
                    descripcion: ''
                },
                {
                    id: 22,
                    nombre: 'salsa de queso',
                    descripcion: ''
                },
                {
                    id: 23,
                    nombre: 'salsa de ajo',
                    descripcion: ''
                },
                {
                    id:24 ,
                    nombre: 'salsa de aji',
                    descripcion: ''
                },
                {
                    id: 25,
                    nombre: 'queso rallado',
                    descripcion: ''
                },
                {
                    id:26 ,
                    nombre: 'salchicha',
                    descripcion: ''
                },
                {
                    id:27 ,
                    nombre: 'salsa americana',
                    descripcion: ''
                },
                {
                    id:28 ,
                    nombre: 'salsa verde',
                    descripcion: ''
                },
                {
                    id:29 ,
                    nombre: 'azucar',
                    descripcion: ''
                },
                {
                    id: 30 ,
                    nombre: 'stevia',
                    descripcion: ''
                },
                {
                    id: 31 ,
                    nombre: 'edulcorante',
                    descripcion: ''
                },
                {
                    id: 32 ,
                    nombre: 'té ceylan',
                    descripcion: ''
                },
                {
                    id: 33 ,
                    nombre: 'té verde',
                    descripcion: ''
                },
                {
                    id: 34 ,
                    nombre: ' té eral grey',
                    descripcion: ''
                }
            ],
            categorias: [
                {
                    id: 1,
                    nombre: 'sandwich',
                    descripcion: '',
                    image: ''
                },
                {
                    id: 2,
                    nombre:'Cafe',
                    descripcion: '',
                    image:''
                },
                {
                    id: 3,
                    nombre: 'Bebida',
                    descripcion: '',
                    image: ''
                }
            ],
            pedidos: [
                { 
                    id: 121,
                    nombre: 'Alfonso Pareja',
                    cantidad: 10,
                    pedidos: [
                        {
                            id: 9,
                            categoria: 1,
                            quality: 2,
                            nombre: 'sandwich fresco ',
                            descripcion: 'sandwich queso fresco con tomate',
                            ingredientes: [
                                {
                                    id: 8,
                                    nombre: 'pan molde',
                                    descripcion: ''
                                },
                                {
                                    id: 13,
                                    nombre: 'queso fresco',
                                    descripcion: ''
                                },
                                {
                                    id: 16,
                                    nombre: 'tomate',
                                    descripcion: ''
                                },
                            ],
                            promocion: null,
                            id_promocion: null,
                            id_foto: null,
                            urlFoto: 'https://previews.123rf.com/images/wideonet/wideonet1711/wideonet171100065/90667648-s%C3%A1ndwich-fresco-con-jam%C3%B3n-y-queso-sobre-fondo-de-madera.jpg',
                            precio_unidad: '1100',
                            cantidad: 20,
                            isActive: true
        
                        }
                    ],
                    total: 2200
                }
            ],
            promociones: [],
            horario: {
                horaInicio: '08:00',
                horaCierre: '22:00',
                cerrado: false
            }
        }
    }

    
}