import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-pais',
  templateUrl: './informacion-pais.component.html',
  styleUrls: ['./informacion-pais.component.scss']
})
export class InformacionPaisComponent {
  @Input() pais: any;

  constructor() { }

  ngOnInit(): void {
  }
}
