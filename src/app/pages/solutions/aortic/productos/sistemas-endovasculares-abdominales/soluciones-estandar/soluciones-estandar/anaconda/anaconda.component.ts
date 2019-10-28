import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'

@Component({
  selector: 'app-anaconda',
  templateUrl: './anaconda.component.html',
  styleUrls: ['./anaconda.component.css']
})
export class AnacondaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'), { swipeable: true });
  }

}
