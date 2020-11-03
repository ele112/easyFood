import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PopoverComponent } from './popover/popover.component';
import { SelectorComponent } from './selector/selector.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerPedidoComponent } from './ver-pedido/ver-pedido.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HorariosComponent } from './horarios/horarios.component';
import { PedidosAdminComponent } from './pedidos-admin/pedidos-admin.component';
import { ProductosAdminComponent } from './productos-admin/productos-admin.component';
import { IngredientesAdminComponent } from './ingredientes-admin/ingredientes-admin.component';


const PAGES_COMPONENTS = [
    PopoverComponent, 
    SelectorComponent, 
    PerfilComponent,
    SearchViewComponent,
    VerPedidoComponent,
    CategoriasComponent,
    HorariosComponent,
    PedidosAdminComponent,
    ProductosAdminComponent,
    IngredientesAdminComponent
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule.forRoot(),
    ],
    declarations: [
        PAGES_COMPONENTS
    ],
    exports: [
        PAGES_COMPONENTS
    ],
    entryComponents: [
        PAGES_COMPONENTS
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
