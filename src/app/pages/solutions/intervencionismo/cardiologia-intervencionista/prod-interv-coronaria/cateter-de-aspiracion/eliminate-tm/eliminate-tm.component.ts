import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eliminate-tm',
  templateUrl: './eliminate-tm.component.html',
  styleUrls: ['./eliminate-tm.component.css']
})
export class EliminateTmComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Eliminate<sup>&trade;</sup> – catéter de aspiración';
    this.imagen = 'eliminate-product-image.png';
  }

}
