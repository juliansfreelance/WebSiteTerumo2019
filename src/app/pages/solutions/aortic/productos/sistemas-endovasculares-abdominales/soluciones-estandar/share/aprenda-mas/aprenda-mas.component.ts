import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aprenda-mas',
  templateUrl: './aprenda-mas.component.html',
  styleUrls: ['./aprenda-mas.component.css']
})
export class AprendaMasComponent implements OnInit {

  @Input() urlImagen = 'assets/img/solutions/aortic/Relay/resources-relayplus.png';
  @Input() tittle = 'Sin Recurso';
  @Input() description = 'Sin descripción';
  @Input() link = 'aortic/soluciones-estandar/treo/recursos';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goTo(ruta: string) {
    this.router.navigate([ruta]);
    window.scroll(0, 0);
  }

}
