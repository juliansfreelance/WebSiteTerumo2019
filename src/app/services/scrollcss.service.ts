import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollcssService {

  private styleTag: HTMLStyleElement;

  constructor() {
    this.styleTag = this.buildStyleElement();
  }

  public disable(): void {
    document.body.appendChild( this.styleTag );
}


public enable(): void {
    document.body.removeChild( this.styleTag );
}


private buildStyleElement(): HTMLStyleElement {

    const style = document.createElement( 'style' );

    // tslint:disable-next-line: deprecation
    style.type = 'text/css';
    style.setAttribute( 'data-debug', 'Injected by WindowScrolling service.' );
    style.textContent = `
        html {
            overflow: hidden !important ;
        }
    `;

    return( style );

}
}
