import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-gw-m',
  templateUrl: './radifocus-gw-m.component.html',
  styleUrls: ['./radifocus-gw-m.component.css']
})
export class RadifocusGwMComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Guidewire M Standard type – Guía estándar";
    this.imagen = "radifocus-guide-wire-m-standard-type-product-image.png";
  }

}
