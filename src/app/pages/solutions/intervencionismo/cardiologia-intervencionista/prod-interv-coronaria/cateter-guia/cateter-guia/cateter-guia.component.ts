import { Component, OnInit } from '@angular/core';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-cateter-guia',
  templateUrl: './cateter-guia.component.html',
  styleUrls: ['./cateter-guia.component.css']
})
export class CateterGuiaComponent implements OnInit {

  constructor(private urlService: UrlService) { }

  ngOnInit() {
    console.log("Router", this.urlService.getTransformPath())
    console.log("Location", this.urlService.getFullPath())
  }

}
