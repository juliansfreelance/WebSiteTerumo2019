import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-estrategia-comercial',
  templateUrl: './estrategia-comercial.component.html',
  styleUrls: ['./estrategia-comercial.component.css']
})
export class EstrategiaComercialComponent implements OnInit {

  public brochure = [];
  constructor() { 
    const names = [
      "862048_Prescriptive-Oxygenation-Brochure_MAY2015_FINAL_lowRes.pdf",
      "863551_CAPIOX-FX-Advance-Brochure_DEC2015_FINAL.pdf",
      "Bronson.pdf",
      "Baker.pdf"];
    
      names.map(name => {
        this.brochure.push(general.document_url + name);
      })

  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
    M.Modal.init(document.querySelectorAll('.modal'), {});
  }

}
