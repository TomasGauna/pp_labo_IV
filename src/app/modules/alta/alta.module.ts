import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaRoutingModule } from './alta-routing.module';
import { AltaComponent } from './alta.component';
import { ProductoComponent } from 'src/app/components/alta/producto/producto.component';
import { PaisesComponent } from 'src/app/components/alta/paises/paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AltaComponent,
    ProductoComponent,
    PaisesComponent
  ],
  imports: [
    CommonModule,
    AltaRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AltaModule { }
