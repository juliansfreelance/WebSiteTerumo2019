import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus',
  templateUrl: './radifocus.component.html',
  styleUrls: ['./radifocus.component.css']
})
export class RadifocusComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Introducer II Standard Kit - Introductor";
    this.imagen = "radifocus-introducer-II-standard-kit-a-product-image.png";
  }

}
