import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-gw-gt',
  templateUrl: './radifocus-gw-gt.component.html',
  styleUrls: ['./radifocus-gw-gt.component.css']
})
export class RadifocusGwGtComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Guidewire GT con espiral de oro – Microguía"
    this.imagen = "radifocus-guide-wire-gt-with-gold-coil-product-image.png";
  }

}
