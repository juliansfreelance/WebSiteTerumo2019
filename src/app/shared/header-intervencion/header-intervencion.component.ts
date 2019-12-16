import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-intervencion',
  templateUrl: './header-intervencion.component.html',
  styleUrls: ['./header-intervencion.component.css']
})
export class HeaderIntervencionComponent implements OnInit {

  textoHeader = '';
  sideInstance = null;

  constructor(private router: Router) { }

  ngOnInit() {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true });
    this.sideInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false, coverTrigger: false, closeOnClick: false });
  }
  goTo(texto: string) {
    this.sideInstance.close();
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

  emitterBuscador(texto: string) {
    this.textoHeader = texto;
  }

  emitterResultado(texto: string) {
    this.textoHeader = texto;
  }

}
