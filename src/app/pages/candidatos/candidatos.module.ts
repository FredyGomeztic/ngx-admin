import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatosRoutingModule } from './candidatos-routing.module';
import { CrearCandidatoComponent } from './crear-candidato/crear-candidato.component';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';
import { EliminarCandidatoComponent } from './eliminar-candidato/eliminar-candidato.component';


@NgModule({
  declarations: [
    CrearCandidatoComponent,
    ListarCandidatosComponent,
    EliminarCandidatoComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule
  ]
})
export class CandidatosModule { }
