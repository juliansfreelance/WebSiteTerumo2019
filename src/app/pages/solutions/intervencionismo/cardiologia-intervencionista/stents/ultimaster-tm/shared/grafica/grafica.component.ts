import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() titulo: string  = 'No hay título';
  @Input() cita: string= '0';
  @Input() imagen: string = '';

  constructor() { }

  ngOnInit() {
  }

}
