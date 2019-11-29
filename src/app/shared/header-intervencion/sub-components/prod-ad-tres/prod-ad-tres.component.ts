import * as M from '../../../../../assets/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-ad-tres',
  templateUrl: './prod-ad-tres.component.html',
  styleUrls: ['./prod-ad-tres.component.css']
})
export class ProdAdTresComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }
  
  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
