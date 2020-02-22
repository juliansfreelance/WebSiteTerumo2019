import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terufusion-bjs',
  templateUrl: './terufusion-bjs.component.html',
  styleUrls: ['./terufusion-bjs.component.css']
})
export class TerufusionBjsComponent implements OnInit {

  imagen: string;
  subtitulo: string;
  descripcion: string;

  descripcion_cont: string;
  type: string;

  constructor() { }

  ngOnInit() {
    this.imagen = "terufusion-syringe-pump-smart-product-image.png";
    this.descripcion = "Exitosa integración de profesionalismo, seguridad y facilidad de uso."
    this.subtitulo = "Bomba Jeringa Smart"

    this.descripcion_cont = "<p> Terufusion<sup>&reg;</sup>, el sistema avanzado de infusión de Terumo, ofrece bombas de jeringa más precisas y seguras sin "
      + "ponerle una carga adicional al profesional de la salud. Combinamos tecnologías sofisticadas con la facilidad de uso "
      + "para alcanzar mejores resultados en los pacientes. <br/><br/>"
      + "Al usar aptitudes de vanguardia en tecnologías de infusión, las bombas INTELIGENTES de Terufusion<sup>&reg;</sup> se conectan "
      + "con la información del hospital y sistemas de datos. Esto da lugar a pasos gigantescos hacia la información "
      + "compartida.<br/><br/>"
      + "Completando la gama de productos con jeringas y accesorios, el sistema avanzado de infusión Terufusion<sup>&reg;</sup> es un "
      + "compañero confiable y fácil de entender en la optimización del manejo de infusión.</p>";
    this.type = "2";
  }

}
