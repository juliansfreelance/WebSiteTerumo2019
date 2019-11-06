import { Component, OnInit } from '@angular/core';
import * as M from 'src/assets/js/materialize.min.js'
import { Router } from '@angular/router';

@Component({
  selector: 'app-anaconda',
  templateUrl: './anaconda.component.html',
  styleUrls: ['./anaconda.component.css']
})
export class AnacondaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    M.Tabs.init(document.querySelectorAll('.tabs'), { swipeable: true });
  }

  goTo(route: string) {
    this.router.navigate([route]);
    window.scroll(0, 0);
  }

}
