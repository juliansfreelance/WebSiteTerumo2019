import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import data from 'src/assets/data/videos.json';

@Component({
  selector: 'app-videos-infusion',
  templateUrl: './videos-infusion.component.html',
  styleUrls: ['./videos-infusion.component.css']
})
export class VideosInfusionComponent implements OnInit {

  current_line = "";
  current_type = "";
  current_videos = [];
  other_lines = [];

  list_videos = data['list_videos'];

  imagen: string;
  descripcion: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const param_id = this.activatedRoute.snapshot.paramMap.get('id');
    const param_type = this.activatedRoute.snapshot.paramMap.get('type');

    this.current_line = (param_id) ? param_id : 'TODOS';
    this.current_type = (param_type) ? param_type : '1';

    if (this.current_type == "1") {
      this.imagen = "terufusion-infusion-pump-smart-midpress-product-image.png";
      this.descripcion = "Exitosa integración de profesionalismo, seguridad y facilidad de uso."
    } else {
      this.imagen = "terufusion-syringe-pump-smart-product-image.png";
      this.descripcion = "Exitosa integración de profesionalismo, seguridad y facilidad de uso."
    }

    this.changeVideos();
  }

  goBack() {
    this.location.back();
  }

  goTo(direction: string) {
    this.router.navigate([direction]);
    window.scroll(0, 700);
  }

  changeLine(line: string) {
    this.current_line = line;
    this.changeVideos();
  }
  changeVideos() {
    this.current_videos = this.list_videos.filter(res => res.id == this.current_line);
    this.other_lines = this.list_videos.filter(res => res.id != this.current_line);
  }
}
