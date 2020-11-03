
export interface IApp {

    ingredientes?: Ingrediente[];
    promociones?: Promocion[];
    productos?: Producto[];
    carrito?: Carro;
    categorias?: Categoria[];
    pedidos?: Pedido[];
    horario: Horario;


}

export class Horario {
    horaInicio: string;
    horaCierre: string;
    cerrado: boolean ;

    constructor(){
        this.horaInicio = null;
        this.horaCierre = null;
        this.cerrado = null
    }
}

export class Pedido{

    id: number;
    nombre: string;
    cantidad: number;
    total: number;
    pedidos: Producto[];

    constructor(){
        this.id = null;
        this.nombre = null;
        this.cantidad = null;
        this.total = null;
        this.pedidos = null;
    }
}

export interface IProducto{
    id: number;
    nombre: string;
    descripcion: string;
    precio_unidad: string;
    id_promocion: number;
    id_foto: number;
    urlFoto: string;
    promocion: string;
    ingredientes: Ingrediente[];
    cantidad?: number;
    isActive?: boolean;
}

export class Producto implements IProducto{


    id: number;
    nombre: string;
    descripcion: string;
    precio_unidad: string;
    id_promocion: number;
    id_foto: number;
    urlFoto: string;
    promocion: string;
    ingredientes: Ingrediente[];
    cantidad?: number;
    categoria?: number;
    quality?: number;
    isActive: boolean;

    constructor(){
        this.id = null;
        this.nombre = null;
        this.descripcion = null;
        this.precio_unidad = null;
        this.id_promocion = null;
        this.id_foto = null;
        this.urlFoto = null;
        this.promocion = null;
        this.ingredientes = null;
        this.cantidad = null;
        this.isActive = null;
        this.categoria = null;
        this.quality = 0;
    }
}

export interface ICategoria{
    nombre: string;
    descripcion: string;
}

export class Categoria implements ICategoria{
    id: number;
    nombre: string;
    descripcion: string;
    image: string;

    constructor(){
        this.id = null;
        this.nombre = null;
        this.descripcion = null;
        this.image = null;
    }
}

export class Ingrediente{
    id: number;
    nombre: string;
    descripcion: string;

    constructor(){
        this.id = null;
        this.nombre = null;
        this.descripcion = null;
    }
}

export interface Promocion{
    id: number;
    nombre: string;
    descripcion: string;
    porc_descuento: string;
    max_descuento: number;
}




export class Carta{
    id: number;
    nombre: string;
    descripcion: string;
    precio_unidad: string;
    id_promocion: number;
    id_foto: number;
    urlFoto: string;
    promocion: Promocion;
    ingredientes: Ingrediente[];
    cantidad?: number;

    constructor(){
        this.id = null;
        this.nombre = null;
        this.descripcion = null;
        this.precio_unidad = null;
        this.id_promocion = null;
        this.id_foto = null;
        this.urlFoto = null;
        this.promocion = null;
        this.ingredientes = null;
        this.cantidad = 0;
    }

    public parse(json: any){
        try {
            this.id = json.id;
            this.nombre = json.nombre;
            this.descripcion = json.descripcion;
            this.precio_unidad = json.precio_unidad;
            this.id_promocion = json.id_promocion;
            this.id_foto = json.id_foto;
            this.urlFoto = json.urlFoto;
            this.promocion = json.promocion[0] || null;
            this.ingredientes = json.ingredientes;
            this.cantidad = 0;

            return this;

        } catch (error) { }
    }

    
    parseObject(object: any[]){
        try {
            
            let cartas: Carta[] = [];
            object.map((carta) => {
                cartas.push(new Carta().parse(carta));
            })

            return cartas;
        } catch (error) { }
    }
}


export class Carro {

    total: number;
    cantidad?: number;
    productos?: any[];


    constructor(){
        this.total = 0;
        this.cantidad = 0;
        this.productos = null;
    }


}