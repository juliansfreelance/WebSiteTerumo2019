import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-capiox-fx',
  templateUrl: './capiox-fx.component.html',
  styleUrls: ['./capiox-fx.component.css']
})
export class CapioxFxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true
    });
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
