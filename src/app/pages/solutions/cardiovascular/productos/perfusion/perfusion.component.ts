import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-perfusion',
  templateUrl: './perfusion.component.html',
  styleUrls: ['./perfusion.component.css']
})
export class PerfusionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true
    });
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
    M.Modal.init(document.querySelectorAll('.modal'), {})
  }

}
