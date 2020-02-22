import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terufusion-bi-sm',
  templateUrl: './terufusion-bi-sm.component.html',
  styleUrls: ['./terufusion-bi-sm.component.css']
})
export class TerufusionBiSmComponent implements OnInit {

  imagen: string;
  descripcion: string;
  subtitulo: string;
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imagen = "terufusion-infusion-pump-smart-midpress-product-image.png";
    this.subtitulo = "Bomba de Infusión Smart Midpress"
    this.descripcion = "Exitosa integración de profesionalismo, seguridad y facilidad de uso."
    this.type = "1";
  }
}
