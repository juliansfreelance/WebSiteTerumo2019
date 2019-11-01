import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  goTo(texto: string) {
    this.router.navigate([texto]);
    window.scroll(0, 0);
  }

}
