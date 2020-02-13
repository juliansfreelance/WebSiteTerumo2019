import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surflo',
  templateUrl: './surflo.component.html',
  styleUrls: ['./surflo.component.css']
})
export class SurfloComponent implements OnInit {

  titulo: string;
  sub_titulo: string;
  imagen: string;
  descripcion: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Surflo<sup>&reg;</sup>";
    this.sub_titulo = "Catéteres Intravenosos";
    this.imagen = "versatus-catheter-product-image.png";

    this.descripcion = "<p> Los catéteres I.V. Surflo<sup>&reg;</sup> están hechos de ETFE de grado médico especial (recto) y FEP (recto, "
      + "mariposa, mariposa con puerto de inyección). <br><br>"
      + "Los materiales cuidadosamente seleccionados de los catéteres I.V. ETFE/FEP de Terumo están diseñados para "
      + "garantizar una forma estable (menor riesgo de puntas partidas y desprendimiento) durante punciones en condiciones difíciles.</p>";
  }

}
