import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeringas',
  templateUrl: './jeringas.component.html',
  styleUrls: ['./jeringas.component.css']
})
export class JeringasComponent implements OnInit {

  titulo: string;
  imagen: string;

  descripcion: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Jeringas";
    this.imagen = "syringes-3part-product-image.png";
    this.descripcion = "<p>Nuestras jeringas Terumo han sido diseñadas para ser de alta calidad, desde el desarrollo hasta el empaque. <br><br>"
      + "Su cuerpo de alta transparencia permite reconocer burbujas de aire con facilidad y el impreso nítido facilita un"
      + "manejo preciso de la dosis. Las jeringas no tienen componentes hechos de látex de caucho natural. Son ecoamigables"
      + "y están diseñadas para tener un mínimo de desecho. <br><br>"
      + "Nuestro rango incluye la punta Luer Slip (concéntrica y excéntrica), punta Luer Lock y punta catéter.</p>";
  }

}
