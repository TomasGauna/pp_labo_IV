import { Component } from '@angular/core';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.scss']
})
export class ProductoDetalleComponent {
  producto: any;

  constructor() { }

  ngOnInit(): void {
  }

  recibirProducto($event:any){
    this.producto = $event;
  }
}
