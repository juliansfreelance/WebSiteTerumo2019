import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Terumo2019';

  searchText: string = '';

  ngOnInit(): void {
  }
  onchangeText(text: string) {
    this.searchText = text;
  }
  getDataFromResult(text: string) {
    this.searchText = text;
  }
}
