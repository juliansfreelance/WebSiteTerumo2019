import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ClienteI } from 'src/app/models/cliente.interface';
import { MapsAPILoader, MouseEvent } from '@agm/core';

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
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(
    private emailService: EmailService,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    //M.textareaAutoResize.init(document.querySelectorAll('#mensaje_text'))
    //this.initMap();
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
    })
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 4.687157;
        this.longitude = -74.056041;
        this.zoom = 18;
      });
    }
  }
  
  /*initMap() {
    var lati = 4.6828899
    var long = -74.0437217;
    var uluru = { lat: lati, lng: long }
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }*/

  contactForm(form: any) {
    console.log("Objeto", form)
    this.emailService.sendMessage(form).subscribe(() => {
      console.log("Mensaje enviado correctamente")
    })
  }

}
