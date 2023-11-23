import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoDetalleRoutingModule } from './producto-detalle-routing.module';
import { ProductoDetalleComponent } from './producto-detalle.component';
import { ListadoComponent } from 'src/app/components/producto/listado/listado.component';
import { InformacionComponent } from 'src/app/components/producto/informacion/informacion.component';
import { InformacionPaisComponent } from 'src/app/components/producto/informacion-pais/informacion-pais.component';


@NgModule({
  declarations: [
    ProductoDetalleComponent,
    ListadoComponent,
    InformacionComponent,
    InformacionPaisComponent,
  ],
  imports: [
    CommonModule,
    ProductoDetalleRoutingModule
  ]
})
export class ProductoDetalleModule { }
