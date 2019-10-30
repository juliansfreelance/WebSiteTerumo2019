import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import data from 'src/assets/data/data.json';
import { Router } from '@angular/router';
import { ScrollcssService } from '../../services/scrollcss.service';


@Component({
  selector: 'app-buscador-resultados',
  templateUrl: './buscador-resultados.component.html',
  styleUrls: ['./buscador-resultados.component.css']
})
export class BuscadorResultadosComponent implements OnInit {

  @Input() textoBuscar = '';

  @Output() textoSalida = new EventEmitter<string>();

  solutions: any[] = data.solucion;
  solution: any = null;

  constructor(private router: Router, private scrollCssService: ScrollcssService ) { }

  ngOnInit() {
  }

  selectSolution(item: any) {
    this.solution = item;
    this.textoSalida.emit('');
    this.router.navigate([item.url]);
    this.scrollCssService.enable();
  }

  llegada(texto) {
    console.log('Resultados: ', texto);
  }

}
