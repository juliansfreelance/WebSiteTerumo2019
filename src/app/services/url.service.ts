import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private router: Router, private location: Location) { }

  getFullPath(): string {
    return this.location.path();
  }

  getTransformPath(): string {
    let cadena = '';
    this.location.path().split('/').map(res => {
      if (res != '')
        cadena += " > " + res.replace('-', ' ');
    });
    return cadena;
  }

  getCurrentPath(): string {
    return this.router.url.split('/').reverse()[0];
  }

}
