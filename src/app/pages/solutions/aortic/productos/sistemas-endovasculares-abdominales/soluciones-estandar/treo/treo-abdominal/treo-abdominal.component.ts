import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-treo-abdominal',
  templateUrl: './treo-abdominal.component.html',
  styleUrls: ['./treo-abdominal.component.css']
})
export class TreoAbdominalComponent implements OnInit {

  instance: any = null;

  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('.slider');
    const element = document.querySelector('.slider');
    M.Slider.init(elements, { indicators: false });
    this.instance = M.Slider.getInstance(element);
  }

  previous() {
    this.instance.prev();
  }

  next() {
    this.instance.next();
  }

}
