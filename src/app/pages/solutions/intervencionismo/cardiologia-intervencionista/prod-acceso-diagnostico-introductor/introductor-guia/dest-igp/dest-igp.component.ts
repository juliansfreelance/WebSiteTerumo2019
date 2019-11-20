import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dest-igp',
  templateUrl: './dest-igp.component.html',
  styleUrls: ['./dest-igp.component.css']
})
export class DestIgpComponent implements OnInit {

  titulo: string;
  imagen: string;


  constructor() { }

  ngOnInit() {
    this.titulo = "Destination<sup>&reg;</sup> - introductor guía periférico";
    this.imagen = "destination-product-image.png";
  }

}
