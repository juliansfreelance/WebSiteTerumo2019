import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-cardiologia-interv',
  templateUrl: './banner-cardiologia-interv.component.html',
  styleUrls: ['./banner-cardiologia-interv.component.css']
})
export class BannerCardiologiaIntervComponent implements OnInit {

  @Input() titulo = 'No hay un título disponible';
  @Input() imagen = '../../../../../../assets/img/solutions/aortic/fenestrated.png';

  style = {
    'background': 'url(' + this.imagen + '),linear-gradient(to right, white 5%, #008f66 120%)'
  };


  constructor() { }

  ngOnInit() {
  }

}
