import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultadosRoutingModule } from './resultados-routing.module';
import { CrearComponent } from './crear-resultado/crear.component';
import { ConsultarComponent } from './consultar-resultado/consultar.component';
import { EliminarComponent } from './eliminar-resultado/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ConsultarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    ResultadosRoutingModule
  ]
})
export class ResultadosModule { }
