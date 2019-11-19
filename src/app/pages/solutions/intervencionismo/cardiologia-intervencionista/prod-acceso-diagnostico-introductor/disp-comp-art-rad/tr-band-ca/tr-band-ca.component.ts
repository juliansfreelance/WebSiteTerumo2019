import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tr-band-ca',
  templateUrl: './tr-band-ca.component.html',
  styleUrls: ['./tr-band-ca.component.css']
})
export class TrBandCaComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "TR Band<sup>&reg;</sup> - dispositivo de compresión de arteria radial";
    this.imagen = "tr-band-product-image.png";
  }

}
