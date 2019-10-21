import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-capiox-sp',
  templateUrl: './capiox-sp.component.html',
  styleUrls: ['./capiox-sp.component.css']
})
export class CapioxSpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true
    });
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
  }

}
