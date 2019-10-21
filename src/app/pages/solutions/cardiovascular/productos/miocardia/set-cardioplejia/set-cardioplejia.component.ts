import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-set-cardioplejia',
  templateUrl: './set-cardioplejia.component.html',
  styleUrls: ['./set-cardioplejia.component.css']
})
export class SetCardioplejiaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
