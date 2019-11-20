import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-gc',
  templateUrl: './radifocus-gc.component.html',
  styleUrls: ['./radifocus-gc.component.css']
})
export class RadifocusGcComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup>  Glidecath<sup>&reg;</sup>  - Catéter angiográfico hidrofílico";
    this.imagen = "radifocus-glidecath-product-image.png";
  }

}
