import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'

@Component({
  selector: 'app-fenestrated',
  templateUrl: './fenestrated.component.html',
  styleUrls: ['./fenestrated.component.css']
})
export class FenestratedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'), { swipeable: true });
  }

}
