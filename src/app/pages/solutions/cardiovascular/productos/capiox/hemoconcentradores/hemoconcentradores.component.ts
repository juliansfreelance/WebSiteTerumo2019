import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-hemoconcentradores',
  templateUrl: './hemoconcentradores.component.html',
  styleUrls: ['./hemoconcentradores.component.css']
})
export class HemoconcentradoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
