import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-estrategia-comercial',
  templateUrl: './estrategia-comercial.component.html',
  styleUrls: ['./estrategia-comercial.component.css']
})
export class EstrategiaComercialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
    M.Modal.init(document.querySelectorAll('.modal'), {});
  }

}
