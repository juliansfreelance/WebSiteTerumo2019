import { Component, OnInit } from '@angular/core';
import { general } from 'src/app/constants/general';
import * as M from 'src/assets/js/materialize.min.js';

@Component({
  selector: 'app-terumo-system',
  templateUrl: './terumo-system.component.html',
  styleUrls: ['./terumo-system.component.css']
})
export class TerumoSystemComponent implements OnInit {

  public brochure: string;

  constructor() { 
    const name =  "886687_Terumo_AdvSystem1_6PgBrochure_PRINT_readers.pdf";
    this.brochure = general.document_url + name; 
  }

  ngOnInit() {
  }

}
