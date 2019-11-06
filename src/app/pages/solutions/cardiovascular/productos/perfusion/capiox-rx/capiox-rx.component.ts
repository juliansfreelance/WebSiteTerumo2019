import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-capiox-rx',
  templateUrl: './capiox-rx.component.html',
  styleUrls: ['./capiox-rx.component.css']
})
export class CapioxRxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), { fullWidth: true, indicators: true });
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
  }

}
