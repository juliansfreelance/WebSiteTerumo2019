import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agujas-dent',
  templateUrl: './agujas-dent.component.html',
  styleUrls: ['./agujas-dent.component.css']
})
export class AgujasDentComponent implements OnInit {

  titulo: string; 
  imagen: string;

  constructor() { }

  ngOnInit() {
    this.titulo = "Agujas Dentales";
    this.imagen = "dental-needles-product-image.png";
  }

}
