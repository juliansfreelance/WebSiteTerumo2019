import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos-infusion',
  templateUrl: './videos-infusion.component.html',
  styleUrls: ['./videos-infusion.component.css']
})
export class VideosInfusionComponent implements OnInit {

  current_video = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const param = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(param);
    this.current_video = (param) ? param : 'TODOS';
  }

  goTo(direction: string) {
    this.router.navigate([direction]);
    window.scroll(0, 700);
  }
}
