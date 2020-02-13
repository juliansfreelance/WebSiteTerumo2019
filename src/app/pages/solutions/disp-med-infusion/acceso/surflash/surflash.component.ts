import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surflash',
  templateUrl: './surflash.component.html',
  styleUrls: ['./surflash.component.css']
})
export class SurflashComponent implements OnInit {

  titulo: string;
  sub_titulo: string;
  imagen: string;

  descripcion: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Surflash<sup>&trade;</sup>";
    this.sub_titulo = "Catéteres Intra venosos";
    this.imagen = "surflash-catheter-product-image.png";
    this.descripcion = "<p> La función Surflash<sup>&trade;</sup> está diseñada para confirmar la entrada del catéter en la vena, incrementando "
      + "el éxito en la primera punción. El alto índice de éxito aumenta de manera significativa la comodidad del paciente "
      + "debido a la menor cantidad de punciones múltiples. Adicionalmente, se usa menor cantidad de material y de tiempo, "
      + "adicionalmente los costos por inyección se reducen. <br /><br />"
      + "Los catéteres I.V. de Surflash<sup>&trade;</sup> están hechos de un poliuretano de grado médico especial, que se "
      + "vuelve muy suave a la temperatura del cuerpo, por lo que garantiza la comodidad del paciente.<br /><br />"
      + "La combinación del diseño de la punta de aguja de Terumo y los catéteres siliconados está diseñada para mejorar, "
      + "tanto como sea posible, la comodidad y el bienestar del paciente.<br /><br />"
      + "Adicionalmente, los catéteres I.V. de Surflash<sup>&trade;</sup> son opacos y resistentes al torcimiento para "
      + "mejorar la comodidad y la seguridad del paciente.</p>";
  }

}
