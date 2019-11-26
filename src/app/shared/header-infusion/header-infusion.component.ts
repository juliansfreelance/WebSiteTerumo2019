import { Component, OnInit } from '@angular/core';
import * as M from '../../../assets/js/materialize.min.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-infusion',
  templateUrl: './header-infusion.component.html',
  styleUrls: ['./header-infusion.component.css']
})
export class HeaderInfusionComponent implements OnInit {
  textoHeader ='';

  constructor( private router: Router ) { }

  ngOnInit() {
    M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
    M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
    M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false, coverTrigger: false, closeOnClick: false } );
  }
  goTo(texto: string) {
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


//   constructor() { }

//   ngOnInit() {
//   }

// }

// import { Component, OnInit } from '@angular/core';
// import * as M from '../../../assets/js/materialize.min.js';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-header-cardio',
//   templateUrl: './header-cardio.component.html',
//   styleUrls: ['./header-cardio.component.css']
// })
// export class HeaderCardioComponent implements OnInit {

//   textoHeader ='';

//   constructor( private router: Router ) { }

//   ngOnInit() {
//     M.Sidenav.init( document.querySelectorAll('.sidenav'), { draggable: true, preventScrolling: true } );
//     M.Collapsible.init( document.querySelectorAll('.collapsible'), {} );
//     M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), { constrainWidth: false, coverTrigger: false, closeOnClick: false } );
//   }
//   goTo(texto: string) {
//     this.router.navigate([texto]);
//     window.scroll(0, 0);
//   }

//   emitterBuscador(texto: string) {
//     this.textoHeader = texto;
//   }

//   emitterResultado(texto: string) {
//     this.textoHeader = texto;
//   }

// }
