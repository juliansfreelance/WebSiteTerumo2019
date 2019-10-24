import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textoHeader: string = '';


  constructor(private router: Router) { }

  ngOnInit() {
    M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false, coverTrigger: false } );
    M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
  }

  goTo(texto: string) {
    this.router.navigate([texto]);
  }

  emitterBuscador(texto: string) {
    this.textoHeader = texto;
    console.log(this.textoHeader)
  }

  emitterResultado(texto: string) {
    this.textoHeader = texto;
  }
}
