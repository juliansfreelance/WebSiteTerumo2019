import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import data from 'src/assets/data/data.json';
import { Router } from '@angular/router';
import * as M from '../../../assets/js/materialize.min.js';


@Component({
  selector: 'app-buscador-resultados',
  templateUrl: './buscador-resultados.component.html',
  styleUrls: ['./buscador-resultados.component.css']
})
export class BuscadorResultadosComponent implements OnInit {

  @Input() textoBuscar: string = '';

  @Output() textoSalida = new EventEmitter<string>();

  solutions: any[] = data.solucion;
  solution: any = null;

  constructor(private router: Router) { }

  ngOnInit() {
    //const instant = M.Modal.init(document.querySelectorAll('.modal'), {});
    //this.modal.emit(instant);
  }

  selectSolution(item: any) {
    this.solution = item;
    this.textoSalida.emit('');
    this.router.navigate([item.url]);
    console.log(this.router.url);
  }

}
