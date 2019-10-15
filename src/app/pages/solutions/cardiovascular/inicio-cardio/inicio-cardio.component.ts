import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-inicio-cardio',
  templateUrl: './inicio-cardio.component.html',
  styleUrls: ['./inicio-cardio.component.css']
})
export class InicioCardioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { height: 500, interval: 4000, indicators: false });
  }

}
