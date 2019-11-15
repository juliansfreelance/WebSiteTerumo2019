import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'

@Component({
  selector: 'app-relay-plus',
  templateUrl: './relay-plus.component.html',
  styleUrls: ['./relay-plus.component.css']
})
export class RelayPlusComponent implements OnInit {

  instance: any = null;

  /*SECTION 9*/
  relay_urlImagen = 'assets/img/solutions/aortic/Relay/resources-relayplus.png';
  relay_tittle = 'Recursos RelayPlus';
  relay_description = 'Información del producto, videos e instrucciones de uso disponibles para descarga.';
  relay_link = 'aortic/soluciones-estandar/relay-plus/referencias';

  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('.slider');
    const element = document.querySelector('.slider');
    M.Slider.init(elements, { indicators: false });
    this.instance = M.Slider.getInstance(element);

    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true,
      duration: 200
    });
  }

  previous() {
    this.instance.prev();
  }

  next() {
    this.instance.next();
  }

}
