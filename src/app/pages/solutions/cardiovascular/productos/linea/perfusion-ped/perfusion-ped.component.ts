import { Component, OnInit } from '@angular/core';
import * as M from "src/assets/js/materialize.min.js";

@Component({
  selector: 'app-perfusion-ped',
  templateUrl: './perfusion-ped.component.html',
  styleUrls: ['./perfusion-ped.component.css']
})
export class PerfusionPedComponent implements OnInit {

  productos: any = [{
    img: 'linea-1-capiox-rx.jpg',
    name: 'Capiox® RX05',
    desc: 'CAPIOX® \n RX05 Oxygenators'
  },
  {
    img: 'linea-2-capiox-fx.png',
    name: 'Capiox® FX05',
    desc: 'CAPIOX® FX05 Oxygenators'
  },
  {
    img: 'linea-3-system.jpg',
    name: 'System 1 Máquina corazón – pulmón',
    desc: 'CAPIOX® RX05 Oxygenators'
  },
  {
    img: 'linea-4-filtro-art.png',
    name: 'Filtro arterial',
    desc: 'Perfusion Products'
  },
  {
    img: 'linea-5-hemo.png',
    name: 'Hemoconcentradores',
    desc: 'CAPIOX® Hemoconcentrators'
  },
  {
    img: 'linea-6-pack.png',
    name: 'Tubing pack',
    desc: 'X CoatedTM'
  }]

  constructor() { }

  ngOnInit() {
    M.Slider.init(document.querySelectorAll('.slider'), { indicators: false });
  }

}
