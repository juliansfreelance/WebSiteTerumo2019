import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terufusion-bi-sm',
  templateUrl: './terufusion-bi-sm.component.html',
  styleUrls: ['./terufusion-bi-sm.component.css']
})
export class TerufusionBiSmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTo(dir: string, id: string){
    this.router.navigate([dir, id]);
    window.scroll(0,0)
  }
}
