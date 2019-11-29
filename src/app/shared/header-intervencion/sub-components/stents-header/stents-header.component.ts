import * as M from '../../../../../assets/js/materialize.min.js';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stents-header',
  templateUrl: './stents-header.component.html',
  styleUrls: ['./stents-header.component.css']
})
export class StentsHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  }

  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
