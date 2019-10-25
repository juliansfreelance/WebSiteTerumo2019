import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ScrollcssService } from 'src/app/services/scrollcss.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Output() changeText = new EventEmitter<string>();
  @Input() textoBuscar = '';

  constructor(private windowScrolling: ScrollcssService) {}

  ngOnInit() { }

  buscar(event: any) {
    // const resultado = (event) ? this.windowScrolling.disable() : this.windowScrolling.enable();
    if (event) {
      this.windowScrolling.disable();
    } else {
      this.windowScrolling.enable();
    }
    this.changeText.emit(event);
  }
  limpiarText() {
    this.textoBuscar = '';
    this.buscar(this.textoBuscar);
  }

}
