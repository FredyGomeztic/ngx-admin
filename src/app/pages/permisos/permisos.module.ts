import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRoutingModule } from './permisos-routing.module';
import { CrearComponent } from './crear-permiso/crear.component';
import { ListarComponent } from './listar-permisos/listar.component';
import { EliminarComponent } from './eliminar-permiso/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    PermisosRoutingModule
  ]
})
export class PermisosModule { }
