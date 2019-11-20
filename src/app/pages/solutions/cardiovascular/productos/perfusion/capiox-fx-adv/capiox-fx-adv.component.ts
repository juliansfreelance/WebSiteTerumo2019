import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capiox-fx-adv',
  templateUrl: './capiox-fx-adv.component.html',
  styleUrls: ['./capiox-fx-adv.component.css']
})
export class CapioxFxAdvComponent implements OnInit {
  carousel;
  visibleNav = false;
  constructor(private router: Router) { }

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

  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
