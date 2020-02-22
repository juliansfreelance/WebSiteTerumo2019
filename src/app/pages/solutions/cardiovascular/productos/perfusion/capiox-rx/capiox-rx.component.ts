import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-capiox-rx',
  templateUrl: './capiox-rx.component.html',
  styleUrls: ['./capiox-rx.component.css']
})
export class CapioxRxComponent implements OnInit {

  carousel;
  visibleNav = false;
  public brochure = [];

  constructor() {
    const urls = [
      "Bronson.pdf",
      "SpecTab_CAPIOXRX-Oxy_08-11.jpg"];

    urls.map(url => {
      this.brochure.push(general.document_url + url);
    });
  }

  ngOnInit() {
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: false,
    });
    this.carousel = M.Carousel.getInstance(document.querySelector('.carousel.carousel-slider'));
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {
      onOpenStart: () => {
        this.carousel.destroy();
        this.visibleNav = true;
      }, onCloseEnd: () => {
        this.carousel = M.Carousel.init(document.querySelector('.carousel.carousel-slider'), {
          fullWidth: true,
          indicators: false,
        });
        this.visibleNav = false;
      }
    });
  }

  next() {
    this.carousel.next();
  }
  prev() {
    this.carousel.prev();
  }

}

