import { Component, OnInit } from '@angular/core';
import {ProductoClass} from '../claseProduc';
import { PRODUCTOSLISTA } from '../Lista-Produc';
@Component({
  selector: 'app-producos',
  templateUrl: './producos.component.html',
  styleUrls: ['./producos.component.css']
})
export class ProducosComponent implements OnInit {
  Elproducto: ProductoClass = {
    id: 1,
    precio: 100,
    nombre:"RAM",
  };
  productos = PRODUCTOSLISTA;

  productoSeleccionado: ProductoClass;

onSelect(producto: ProductoClass): void {
  this.productoSeleccionado = producto;
}
  
  constructor() { }

  ngOnInit() {
  }

}
