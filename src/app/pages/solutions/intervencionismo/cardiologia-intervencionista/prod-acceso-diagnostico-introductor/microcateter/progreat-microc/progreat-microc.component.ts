import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progreat-microc',
  templateUrl: './progreat-microc.component.html',
  styleUrls: ['./progreat-microc.component.css']
})
export class ProgreatMicrocComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Progreat<sup>&reg;</sup> - Microcatéter";
    this.imagen = "progreat-product-image.png";
  }

}
