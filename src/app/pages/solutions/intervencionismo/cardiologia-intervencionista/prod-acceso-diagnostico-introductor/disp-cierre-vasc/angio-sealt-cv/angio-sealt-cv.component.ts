import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angio-sealt-cv',
  templateUrl: './angio-sealt-cv.component.html',
  styleUrls: ['./angio-sealt-cv.component.css']
})
export class AngioSealtCvComponent implements OnInit {

  titulo: string;
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Angio Seal<sup>&trade;</sup> - dispositivo de cierre vascular";
    this.imagen = "angio-seal-vip-product-image.png";
  }

}
