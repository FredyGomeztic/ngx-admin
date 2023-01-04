import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { CrearComponent } from './crear-partido/crear.component';
import { ListarComponent } from './listar-partido/listar.component';
import { EliminarComponent } from './eliminar-partido/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule
  ]
})
export class PartidosModule { }
