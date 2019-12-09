import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import data from 'src/assets/data/data.json';
import { Router } from '@angular/router';
import { ScrollcssService } from '../../services/scrollcss.service';
import { UrlService } from 'src/app/services/url.service';


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

  constructor(
    private router: Router,
    private scrollCssService: ScrollcssService,
    private url: UrlService) {
    const c_url = this.url.getCurrentPath();
    if (c_url) {
      const newArray = this.filterCategoria(c_url);
      if (newArray)
        this.solutions = newArray[0]['categoria_producto'];
    }
  }

  ngOnInit() {
  }

  selectSolution(item: any) {
    this.solution = item;
    this.textoSalida.emit('');
    this.router.navigate([item.url]);
    this.scrollCssService.enable();
    window.scroll(0, 0);
  }

  llegada(texto) {
    console.log('Resultados: ', texto);
  }

  filterCategoria(url: string) {

    const newArray = this.solutions.filter(categoria => {
      return categoria['url'].toLowerCase().includes(url);
    });

    return (newArray.length > 0) ? newArray : null;
  }

}
