import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ClienteI } from 'src/app/models/cliente.interface';
import * as M from "../../../assets/js/materialize.min.js";

declare var google; 

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public cliente: ClienteI = {
    nombre: "",
    cargo: "",
    empresa: "",
    email: "",
    message: "",
    check: false
  };

  constructor(private emailService: EmailService) { }

  ngOnInit() {
    //M.textareaAutoResize.init(document.querySelectorAll('#mensaje_text'))
    this.initMap();
  }

  initMap() {
    var lati = 4.687675
    var long = -74.0491866
    var uluru = {lat: lati, lng: long}
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

  contactForm(form: any) {
    console.log( "Objeto", form)
    this.emailService.sendMessage(form).subscribe(() => {
      console.log("Mensaje enviado correctamente")
    })
  }

}
