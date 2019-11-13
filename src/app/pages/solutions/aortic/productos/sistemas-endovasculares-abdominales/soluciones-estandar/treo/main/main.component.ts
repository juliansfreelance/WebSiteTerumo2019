import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  instance: any = null;
  
  /* <img src="" alt="Logo TREO"
                class="responsive-img image-circle-broder">
            <h5 class="treo-tittle-color titulo-bold">
                RECURSOS DE TREO
            </h5>
            <p class="treo-tittle-color">
                
            </p>
   */
  treo_urlImagen = 'assets/img/solutions/aortic/TREO/logo-treo.png';
  treo_tittle = 'RECURSOS DE TREO';
  treo_description = 'La información, los videos y las instrucciones de uso del producto están disponibles para la descarga..';
  treo_link = 'aortic/soluciones-estandar/treo/recursos';

  constructor(private router: Router) { }

  ngOnInit() {
    const elements = document.querySelectorAll('.slider');
    const element = document.querySelector('.slider');
    M.Slider.init(elements, { indicators: false });
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true,
      duration: 200
    });

    this.instance = M.Slider.getInstance(element);
  }

  previous() {
    this.instance.prev();
  }

  next() {
    this.instance.next();
  }

  goTo(route: string) {
    this.router.navigate([route]);
    window.scroll(0, 0);
  }
}
