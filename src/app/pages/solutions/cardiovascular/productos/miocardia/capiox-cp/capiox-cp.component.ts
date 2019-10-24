import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-capiox-cp',
  templateUrl: './capiox-cp.component.html',
  styleUrls: ['./capiox-cp.component.css']
})
export class CapioxCpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
