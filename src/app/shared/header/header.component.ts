import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Input() textoBuscarHeader: string;

  constructor() { }

  ngOnInit() {
    const instances1 = M.Sidenav.init(document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true });
  }

  onchangeText(texto: string) {
    this.textoBuscarHeader = texto;
    this.search.emit(this.textoBuscarHeader);
  }

}
