import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runthough-ns',
  templateUrl: './runthough-ns.component.html',
  styleUrls: ['./runthough-ns.component.css']
})
export class RunthoughNsComponent implements OnInit {

  titulo: string;
  imagen: string;
  constructor() {
    this.titulo = 'Runthrough<sup>&reg;</sup>  NS – guía ACTP';
    this.imagen = 'runthrough-ns-product-image.png';
  }

  ngOnInit() {
  }

}
