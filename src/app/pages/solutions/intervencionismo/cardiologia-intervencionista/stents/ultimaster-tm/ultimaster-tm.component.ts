import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ultimaster-tm',
  templateUrl: './ultimaster-tm.component.html',
  styleUrls: ['./ultimaster-tm.component.css']
})
export class UltimasterTmComponent implements OnInit {

  titulo: any;
  imagen: any;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Ultimaster<sup>&trade;</sup> Tansei<sup>&trade;</sup> Stent liberador de medicamento (Drug eluting stent DES)';
    this.imagen = 'ultimaster-tansei-product-image.png';
  }

}
