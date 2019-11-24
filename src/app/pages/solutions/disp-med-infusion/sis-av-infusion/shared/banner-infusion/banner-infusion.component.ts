import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-infusion',
  templateUrl: './banner-infusion.component.html',
  styleUrls: ['./banner-infusion.component.css']
})
export class BannerInfusionComponent implements OnInit {

  @Input() titulo = "Terufusion <sup>&reg;</sup>";
  @Input() subtitulo = "Bomba de Infusión Smart Midpress";
  @Input() descripcion = "";
  @Input() imagen = "";

  style: any;

  constructor() { }

  ngOnInit() {
    this.style = {
      'background': 'url(../../../../../../../assets/img/solutions/infusion/' + this.imagen + ')'
    };
    //+ ', url(../../../../../../assets/img/solutions/intervencionismo/slider-fondo.png)'
  }

}
