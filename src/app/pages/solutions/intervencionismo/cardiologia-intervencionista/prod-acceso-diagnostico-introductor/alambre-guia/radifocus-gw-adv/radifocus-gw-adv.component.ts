import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radifocus-gw-adv',
  templateUrl: './radifocus-gw-adv.component.html',
  styleUrls: ['./radifocus-gw-adv.component.css']
})
export class RadifocusGwAdvComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Radifocus<sup>&reg;</sup> Glidewire<sup>&reg;</sup> Advantage – Guía periférica";
    this.imagen = "radifocus-glidewire-advantage-product-image-update.png";
  }

}
