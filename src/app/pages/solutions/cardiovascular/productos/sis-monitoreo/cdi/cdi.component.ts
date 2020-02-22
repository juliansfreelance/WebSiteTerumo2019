import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-cdi',
  templateUrl: './cdi.component.html',
  styleUrls: ['./cdi.component.css']
})
export class CdiComponent implements OnInit {

  public brochure = [];

  constructor() { 
   
    const names =  [
      "888181_CDI-System-550-Brochure_JUNE2018_LowRes.pdf",
      "891485_Terumo_CDI550_TechCompendium_OCTOBER2018_LowRes.pdf",
      "887455_Terumo_CDI550_ClinicalReferences_JUNE2018_LowRes.pdf"];
    names.map( name => {
      this.brochure.push(general.document_url + name); 
    });
  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false })
  }

}
