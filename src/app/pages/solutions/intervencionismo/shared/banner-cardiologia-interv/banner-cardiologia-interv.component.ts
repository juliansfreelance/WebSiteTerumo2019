import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cardiologia-interv',
  templateUrl: './banner-cardiologia-interv.component.html',
  styleUrls: ['./banner-cardiologia-interv.component.css']
})
export class BannerCardiologiaIntervComponent implements OnInit {

  @Input() titulo = 'No hay un título disponible';
  @Input() imagen;

  style: any; 

  constructor() { }

  ngOnInit() {
    this.style = {
      'background': 'url(../../../../../../assets/img/solutions/intervencionismo/' + this.imagen + '), '
        + 'url(../../../../../../assets/img/solutions/intervencionismo/slider-fondo.png)'
    };
  }

}
