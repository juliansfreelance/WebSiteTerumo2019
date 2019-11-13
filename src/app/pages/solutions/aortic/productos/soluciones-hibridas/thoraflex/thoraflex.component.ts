import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thoraflex',
  templateUrl: './thoraflex.component.html',
  styleUrls: ['./thoraflex.component.css']
})
export class ThoraflexComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  goTo(route: string) {
    this.router.navigate([route]);
    window.scroll(0, 0);
  }
}
