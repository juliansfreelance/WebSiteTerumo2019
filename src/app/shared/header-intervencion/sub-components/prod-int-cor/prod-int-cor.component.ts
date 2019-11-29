import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as M from '../../../../../assets/js/materialize.min.js';

@Component({
  selector: 'app-prod-int-cor',
  templateUrl: './prod-int-cor.component.html',
  styleUrls: ['./prod-int-cor.component.css']
})
export class ProdIntCorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }
  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
