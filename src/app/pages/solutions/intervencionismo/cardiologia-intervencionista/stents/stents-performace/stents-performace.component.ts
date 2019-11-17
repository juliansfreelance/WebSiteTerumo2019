import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stents-performace',
  templateUrl: './stents-performace.component.html',
  styleUrls: ['./stents-performace.component.css']
})
export class StentsPerformaceComponent implements OnInit {

  titulo: any;

  imagen: any;
  imagen_2: any;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Stent liberador de medicamento';

    this.imagen = 'ultimaster-product-image.png';
    this.imagen_2 = 'ultimaster-tansei-product-image.png';
  }

}
