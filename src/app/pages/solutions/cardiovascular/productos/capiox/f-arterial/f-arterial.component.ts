import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-f-arterial',
  templateUrl: './f-arterial.component.html',
  styleUrls: ['./f-arterial.component.css']
})
export class FArterialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
