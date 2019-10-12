import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  @Input() textoBuscarHeader: string;

  constructor(private router:Router) { }

  ngOnInit() {
    M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false, coverTrigger: false } );
    M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
  }

  onchangeText(texto: string) {
    this.textoBuscarHeader = texto;
    this.search.emit(this.textoBuscarHeader);    
  }

  goTo(texto: string){
    this.router.navigate([texto]);
  }
}
