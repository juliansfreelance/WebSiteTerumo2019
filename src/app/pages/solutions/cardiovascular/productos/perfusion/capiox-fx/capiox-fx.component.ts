import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-capiox-fx',
  templateUrl: './capiox-fx.component.html',
  styleUrls: ['./capiox-fx.component.css']
})
export class CapioxFxComponent implements OnInit {
  carousel;
  visibleNav = false;
  constructor() { }

  ngOnInit() {
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: false,
    });
    this.carousel = M.Carousel.getInstance(document.querySelector('.carousel.carousel-slider'));
    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {onOpenStart: () => {
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
