import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-capiox-sp',
  templateUrl: './capiox-sp.component.html',
  styleUrls: ['./capiox-sp.component.css']
})
export class CapioxSpComponent implements OnInit {

  public brochure = [];

  constructor() { 
    const urls = [ 
      "SpecTab_CAPIOXDisposablePump_DEC2014.jpg", 
      "SpecTab_SarnsDisposablePump_08-08.jpg", 
      "SpecTab_CAPIOXCP50CardioplegiaSet_02-09.jpg" ];

    urls.map(url => {
      this.brochure.push(general.document_url + url);
    });
  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true
    });
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
  }

}
