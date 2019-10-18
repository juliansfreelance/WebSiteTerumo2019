import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-cardio',
  templateUrl: './inicio-cardio.component.html',
  styleUrls: ['./inicio-cardio.component.css']
})
export class InicioCardioComponent implements OnInit {

  urlNivel: number = 0;

  constructor(private router: Router) {  }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
    this.urlNivel = this.router.url.split('/').length;
    console.log(this.urlNivel)
  }

}
