import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glidensh-s',
  templateUrl: './glidensh-s.component.html',
  styleUrls: ['./glidensh-s.component.css']
})
export class GlidenshSComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Glidesheath Slender<sup>&reg;</sup>- Introductor transradial";
    this.imagen = "glidesheath-slender-product-image.png";
  }

}
