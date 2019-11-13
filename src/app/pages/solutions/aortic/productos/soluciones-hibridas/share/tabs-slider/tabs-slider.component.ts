import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'

@Component({
  selector: 'app-tabs-slider',
  templateUrl: './tabs-slider.component.html',
  styleUrls: ['./tabs-slider.component.css']
})
export class TabsSliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'), { swipeable: true });
  }

}
