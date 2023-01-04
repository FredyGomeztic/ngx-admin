import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { CrearComponent } from './crear-usuario/crear.component';
import { ListarComponent } from './listar-usuarios/listar.component';
import { EliminarComponent } from './eliminar-usuario/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
