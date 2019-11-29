import * as M from '../../../../../assets/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trat-locreg-h',
  templateUrl: './trat-locreg-h.component.html',
  styleUrls: ['./trat-locreg-h.component.css']
})
export class TratLocregHComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }
  
  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
