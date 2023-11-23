import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AltaComponent } from 'src/app/components/container/alta/alta.component';
import { ListadoComponent } from 'src/app/components/container/listado/listado.component';
import { ModificarComponent } from 'src/app/components/container/modificar/modificar.component';
import { BajaComponent } from 'src/app/components/container/baja/baja.component';


@NgModule({
  declarations: [
    ContainerComponent,
    AltaComponent,
    ListadoComponent,
    ModificarComponent,
    BajaComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContainerModule { }
