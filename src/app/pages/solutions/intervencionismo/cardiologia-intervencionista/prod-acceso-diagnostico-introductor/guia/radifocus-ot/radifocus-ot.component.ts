import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-ot',
  templateUrl: './radifocus-ot.component.html',
  styleUrls: ['./radifocus-ot.component.css']
})
export class RadifocusOtComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Optitorque<sup>&reg;</sup> - Catéter angiográfico";
    this.imagen = "radifocus-optitorque-product-image.png";
  }

}
