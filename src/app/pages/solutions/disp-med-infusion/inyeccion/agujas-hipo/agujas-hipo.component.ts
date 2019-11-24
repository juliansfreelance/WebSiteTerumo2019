import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agujas-hipo',
  templateUrl: './agujas-hipo.component.html',
  styleUrls: ['./agujas-hipo.component.css']
})
export class AgujasHipoComponent implements OnInit {

  titulo: string;
  imagen: string;

  descripcion: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Agujas Hipodérmicas de Seguridad";
    this.imagen = "surguard2-product-image.png";

    this.descripcion = " <p> La aguja SurGuard<sup>&reg;</sup> 2 ha sido desarrollada para cubrir los requerimientos del mercado y ofrece una"
      + "solución segura. <br><br>"
      + "Su sistema de seguridad reduce las lesiones por pinchazos de aguja significativamente y puede ser activado de"
      + "manera fácil. <br><br>"
      + "Surguard<sup>&reg;</sup> conecta perfectamente con las jeringas luer slip y luer lock.</p>";
  }

}
