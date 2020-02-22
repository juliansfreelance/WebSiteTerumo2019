import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-capiox-cp',
  templateUrl: './capiox-cp.component.html',
  styleUrls: ['./capiox-cp.component.css']
})
export class CapioxCpComponent implements OnInit {

  public brochure: any[]

  constructor() { 
    this.brochure = [];
    const list =  ['SpecTab_CAPIOXCP50CardioplegiaSet_02-09.jpg'];
    list.map(elemnt => {
      this.brochure.push(general.document_url+elemnt)
    })
  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
