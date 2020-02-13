import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cont-infusion',
  templateUrl: './cont-infusion.component.html',
  styleUrls: ['./cont-infusion.component.css']
})
export class ContInfusionComponent implements OnInit {

  @Input() descripcion = "<p>Ofrece en la administración volumétrica seguridad y precisión. Combina tecnología moderna con facilidad "
    + "en el uso  para ofrecer los mejores resultados en nuestros pacientes. <br><br>"
    + "Al usar aptitudes de vanguardia en tecnologías de infusión, las bombas INTELIGENTES de Terufusion<sup>&reg;</sup> se "
    + "pueden conectar con la información del hospital y otros sistemas de datos. Esto da lugar a pasos gigantescos "
    + "hacia la información compartida. <br><br>"
    + "Completando la gama de productos con equipos de administración y accesorio, los Sistemas de Infusión Avanzados de infusión Terufusion<sup>&reg;</sup> "
    + "es un compañero confiable y fácil de entender en la optimización del manejo de infusión.</p>";
  @Input() type = "1";


  constructor(public router: Router) { }

  ngOnInit() { }

  goTo(dir: string, id: string) {
    this.router.navigate([dir, id, this.type]);
    window.scroll(0, 0)
  }

}
