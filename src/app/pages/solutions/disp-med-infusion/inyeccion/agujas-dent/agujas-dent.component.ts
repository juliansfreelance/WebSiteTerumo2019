import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agujas-dent',
  templateUrl: './agujas-dent.component.html',
  styleUrls: ['./agujas-dent.component.css']
})
export class AgujasDentComponent implements OnInit {

  imagen: string;

  constructor() { }

  ngOnInit() {
    this.imagen = "dental-needles-product-image.png";
  }

}
