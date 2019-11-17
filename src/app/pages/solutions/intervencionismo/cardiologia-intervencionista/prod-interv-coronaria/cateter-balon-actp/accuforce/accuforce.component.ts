import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accuforce',
  templateUrl: './accuforce.component.html',
  styleUrls: ['./accuforce.component.css']
})
export class AccuforceComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Accuforce <sup>&reg;</sup> - catéter balón ACTP no complaciente ';
    this.imagen = 'accuforce-product-image.png';
  }

}
