import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-f-arterial',
  templateUrl: './f-arterial.component.html',
  styleUrls: ['./f-arterial.component.css']
})
export class FArterialComponent implements OnInit {

  public brochure: any[]

  constructor() {
    this.brochure = [];
    const names = ['SpecTab_CAPIOXArterialFilters_JUL2019.png']
    names.map(name => {
      this.brochure.push(general.document_url + name)
    })
  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
