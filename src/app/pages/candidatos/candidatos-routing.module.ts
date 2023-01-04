import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearCandidatoComponent } from './crear-candidato/crear-candidato.component';
import { EliminarCandidatoComponent } from './eliminar-candidato/eliminar-candidato.component';
import { ListarCandidatosComponent } from './listar-candidatos/listar-candidatos.component';

const routes: Routes = [
  {
    path: 'crearcandidato',
    component: CrearCandidatoComponent
  },
  {
    path: 'listarcandidato',
    component: ListarCandidatosComponent
  },
  {
    path: 'Eliminarcandidato',
    component: EliminarCandidatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidatosRoutingModule { }
