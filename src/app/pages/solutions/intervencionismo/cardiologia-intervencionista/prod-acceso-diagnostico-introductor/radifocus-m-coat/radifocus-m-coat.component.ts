import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-m-coat',
  templateUrl: './radifocus-m-coat.component.html',
  styleUrls: ['./radifocus-m-coat.component.css']
})
export class RadifocusMCoatComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Introducer II M Coat<sup>&trade;</sup> - introductor";
    this.imagen = "radifocus-introducer-II-transradial-kit-m-coat-a-product-image.png";
  }

}
