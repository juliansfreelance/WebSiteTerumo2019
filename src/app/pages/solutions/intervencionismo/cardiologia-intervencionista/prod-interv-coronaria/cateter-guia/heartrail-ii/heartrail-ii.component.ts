import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heartrail-ii',
  templateUrl: './heartrail-ii.component.html',
  styleUrls: ['./heartrail-ii.component.css']
})
export class HeartrailIiComponent implements OnInit {

  titulo: string;
  imagen: string;
  constructor() {
    this.titulo = 'Heartrail<sup>&reg;</sup> II – catéter guía ACTP';
    this.imagen = 'heartrail-II-product-image.png';
  }

  ngOnInit() {
  }

}
