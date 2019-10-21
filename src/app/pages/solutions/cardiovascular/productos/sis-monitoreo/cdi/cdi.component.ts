import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-cdi',
  templateUrl: './cdi.component.html',
  styleUrls: ['./cdi.component.css']
})
export class CdiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false })
  }

}
