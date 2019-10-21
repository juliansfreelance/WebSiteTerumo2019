import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-extracorporea',
  templateUrl: './extracorporea.component.html',
  styleUrls: ['./extracorporea.component.css']
})
export class ExtracorporeaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
