import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-cardio',
  templateUrl: './inicio-cardio.component.html',
  styleUrls: ['./inicio-cardio.component.css']
})
export class InicioCardioComponent implements OnInit {

  urlNivel = 0;

  constructor(private router: Router) {  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), {});
    this.urlNivel = this.router.url.split('/').length;
  }

  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }
}
