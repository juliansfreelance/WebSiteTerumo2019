import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finecross',
  templateUrl: './finecross.component.html',
  styleUrls: ['./finecross.component.css']
})
export class FinecrossComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Finecross<sup>&reg;</sup> MG – Microcatéter guía coronario';
    this.imagen = 'finecross-mg-product-image.png';
  }

}
