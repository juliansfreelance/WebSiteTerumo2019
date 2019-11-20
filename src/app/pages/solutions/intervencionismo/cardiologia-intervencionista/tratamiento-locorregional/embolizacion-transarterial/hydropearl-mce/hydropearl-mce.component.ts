import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hydropearl-mce',
  templateUrl: './hydropearl-mce.component.html',
  styleUrls: ['./hydropearl-mce.component.css']
})
export class HydropearlMceComponent implements OnInit {

  titulo: string;
  imagen: string;
  
  constructor() { }

  ngOnInit() {
    this.titulo = "HydroPearl<sup>&reg;</sup> - microesferas compresibles para embolización";
    this.imagen = "hydropearlV2-product-image.png"; 
  }

}
