import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { general } from 'src/app/constants/general';

@Component({
  selector: 'app-terumo-adv-system',
  templateUrl: './terumo-adv-system.component.html',
  styleUrls: ['./terumo-adv-system.component.css']
})
export class TerumoAdvSystemComponent implements OnInit {
  carousel;
  public brochure: any[]= [];
  visibleNav = false;
  constructor() { 
    const names =  [
      "886687_Terumo_AdvSystem1_6PgBrochure_PRINT_readers.pdf",
      "887672_Terumo_System1_Brochure_LowRes_SinglePgs_FINAL.pdf"
    ];
    names.map( name => {
      this.brochure.push(general.document_url + name); 
    }  ) 
  }

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
