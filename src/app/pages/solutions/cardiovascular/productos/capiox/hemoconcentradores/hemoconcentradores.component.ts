import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-hemoconcentradores',
  templateUrl: './hemoconcentradores.component.html',
  styleUrls: ['./hemoconcentradores.component.css']
})
export class HemoconcentradoresComponent implements OnInit {

  public brochure = [];

  constructor() {
    const names = [
      "885734_Terumo_CAPIOX-Hemo-Sellsheet_USLetter_MAR2018_LowRes.pdf"
    ];

    names.map(name => {
      this.brochure.push(general.document_url + name);
    })
  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
