import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  instance: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
    const elements = document.querySelectorAll('.slider');
    const element = document.querySelector('.slider');
    M.Slider.init(elements, { indicators: false });
    M.Carousel.init(document.querySelectorAll('.carousel.carousel-slider'), {
      fullWidth: true,
      indicators: true,
      duration: 200
    });

    this.instance = M.Slider.getInstance(element);
  }

  previous() {
    this.instance.prev();
  }

  next() {
    this.instance.next();
  }

  goTo(route: string) {
    this.router.navigate([route]);
    window.scroll(0, 0);
  }
}
