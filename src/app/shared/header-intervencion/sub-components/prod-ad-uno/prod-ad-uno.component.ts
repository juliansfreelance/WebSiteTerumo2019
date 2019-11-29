import * as M from '../../../../../assets/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-ad-uno',
  templateUrl: './prod-ad-uno.component.html',
  styleUrls: ['./prod-ad-uno.component.css']
})
export class ProdAdUnoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }
  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
