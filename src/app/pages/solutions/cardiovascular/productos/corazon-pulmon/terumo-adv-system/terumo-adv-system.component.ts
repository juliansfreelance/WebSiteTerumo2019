import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-terumo-adv-system',
  templateUrl: './terumo-adv-system.component.html',
  styleUrls: ['./terumo-adv-system.component.css']
})
export class TerumoAdvSystemComponent implements OnInit {

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
