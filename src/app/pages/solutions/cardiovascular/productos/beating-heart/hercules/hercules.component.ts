import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-hercules',
  templateUrl: './hercules.component.html',
  styleUrls: ['./hercules.component.css']
})
export class HerculesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false })
  }

}
