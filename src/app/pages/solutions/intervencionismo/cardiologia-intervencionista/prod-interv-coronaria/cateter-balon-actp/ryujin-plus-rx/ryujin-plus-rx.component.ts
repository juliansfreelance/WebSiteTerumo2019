import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ryujin-plus-rx',
  templateUrl: './ryujin-plus-rx.component.html',
  styleUrls: ['./ryujin-plus-rx.component.css']
})
export class RyujinPlusRxComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Ryujin<sup>&trade;</sup> Plus RX – catéter balón semicomplaciente PTCA';
    this.imagen = 'ryujin-plus-rx-product-image.png';
  }

}
