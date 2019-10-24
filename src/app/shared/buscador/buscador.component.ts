import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() changeText = new EventEmitter<string>();
  @Input() textoBuscar = '';

  constructor() { }

  ngOnInit() { }

  buscar(event: any) {
    this.changeText.emit(event);
  }

}
