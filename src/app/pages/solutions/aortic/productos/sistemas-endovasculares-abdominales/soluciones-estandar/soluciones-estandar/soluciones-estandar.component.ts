import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'

@Component({
  selector: 'app-soluciones-estandar',
  templateUrl: './soluciones-estandar.component.html',
  styleUrls: ['./soluciones-estandar.component.css']
})
export class SolucionesEstandarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'), { swipeable: true })
  }

}
