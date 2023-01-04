import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisosRolesRoutingModule } from './permisos-roles-routing.module';
import { CrearComponent } from './crear-permiso-rol/crear.component';
import { ListarComponent } from './listar-permisos-roles/listar.component';
import { EliminarComponent } from './eliminar-permiso-rol/eliminar.component';


@NgModule({
  declarations: [
    CrearComponent,
    ListarComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    PermisosRolesRoutingModule
  ]
})
export class PermisosRolesModule { }
