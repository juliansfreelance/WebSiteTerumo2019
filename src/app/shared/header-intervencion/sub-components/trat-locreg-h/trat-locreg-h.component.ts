import * as M from '../../../../../assets/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trat-locreg-h',
  templateUrl: './trat-locreg-h.component.html',
  styleUrls: ['./trat-locreg-h.component.css']
})
export class TratLocregHComponent implements OnInit {

  sideInstance = null;

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
    this.sideInstance = M.Sidenav.getInstance(document.querySelector('.sidenav'));
  }

  goTo(texto: string) {
    this.sideInstance.close();
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
