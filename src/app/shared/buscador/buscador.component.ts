import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as Materialize from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() changeText = new EventEmitter<string>();
  @Input() textoBuscar: string = "";

  constructor() { }

  ngOnInit() {
    /* const instance = Materialize.Autocomplete.init(document.querySelectorAll('.autocomplete'), {
       data: {
         "Aortic": null,
         "Microsoft": null,
         "Google": 'https://placehold.it/250x250'
       } 
     });*/
  }

  buscar(event: any) {
    this.changeText.emit(event);
  }

}
