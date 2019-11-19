import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifepearl-me',
  templateUrl: './lifepearl-me.component.html',
  styleUrls: ['./lifepearl-me.component.css']
})
export class LifepearlMeComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Lifepearl <sup>&reg;</sup> - Microesferas";
    this.imagen = "lifepearl-product-image.png";
  }

}
