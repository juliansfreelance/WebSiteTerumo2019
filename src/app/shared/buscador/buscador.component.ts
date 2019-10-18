import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() changeText = new EventEmitter<string>();
  @Input() textoBuscar: string = '';
  modal:any = null;
  instance: any = null;

  constructor() { }

  ngOnInit() {
    M.ScrollSpy.init(document.querySelectorAll('.scrollspy'), {});
    this.modal = M.Modal.init(document.querySelectorAll('.modal'), {});
    this.instance = M.Modal.getInstance(this.modal);
  }

  buscar(event: any) {
    this.changeText.emit(event);
    this.instance.open();
  }

}
