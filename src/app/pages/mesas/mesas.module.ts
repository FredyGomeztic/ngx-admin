import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { CrearComponent } from './crear-mesa/crear.component';
import { ListarComponent } from './listar-mesa/listar.component';
import { EliminarComponent } from './eliminar-mesa/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule
  ]
})
export class MesasModule { }
