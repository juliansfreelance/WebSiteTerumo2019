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
  type: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.imagen = "terufusion-infusion-pump-smart-midpress-product-image.png";
    this.descripcion = "Exitosa integración de profesionalismo, seguridad y fácil de usar."
    this.type = "1";
  }
}
