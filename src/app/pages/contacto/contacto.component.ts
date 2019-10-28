import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import { ClienteI } from 'src/app/models/cliente.interface';
import { MapsAPILoader } from '@agm/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import * as M from '../../../assets/js/materialize.min.js';

declare var google;

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  public formGroup: FormGroup;

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
  scrollwheel = false;

  constructor(
    private emailService: EmailService,
    private formBuilder: FormBuilder,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.buildForm();
    M.Modal.init(document.querySelectorAll('.modal'), { preventScrolling: true, dismissible: false });
    this.mapsAPILoader.load().then(() => {
      this.latitude = 4.687157;
      this.longitude = -74.056041;
      this.zoom = 18;
      this.scrollwheel= false
      // this.setCurrentLocation();
    })
  }

  /*
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = 4.687157;
        this.longitude = -74.056041;
        this.zoom = 18;
      });
    }
  }
  */


  private buildForm() {
    const minLength = 3;
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(minLength), Validators.maxLength(40)]],
      cargo: '',
      empresa: ['', [Validators.required, Validators.minLength(minLength), Validators.maxLength(35)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(150)]],
      check: [false, Validators.requiredTrue]
    });
  }

  contactForm() {
    const client = this.formGroup.value;
    if (this.formGroup.invalid) {
      M.toast({ html: '¡Opps, aún tienes datos incompletos!', classes: 'rounded' })
    } else {
      M.toast({ html: 'Espera un momento estamos tomando tus datos.', classes: 'rounded' })
      this.emailService.sendMessage(client).subscribe(() => {
        M.toast({ html: 'Gracias ' + client.nombre + ', pronto nos comunicaremos contigo. Bienvenido a la familia Terumo.', classes: 'rounded' })
        this.clearData();
      })
    }

  }

  clearData() {
    this.formGroup = this.formBuilder.group({
      nombre: '',
      cargo: '',
      empresa: '',
      email: '',
      message: '',
      check: false
    });
  }
  /*@START: Validations*/
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      /* error = JSON.stringify(control.errors); */
      if (control.errors.minlength) {
        error = 'El campo tiene muy pocos caracteres.';
      } else if (control.errors.maxlength) {
        error = 'El campo tiene demasiados caracteres.';
      } else if (control.errors.email) {
        error = 'Tu correo electronico no es valido.';
      } else if (control.errors.required) {
        error = 'El campo es requerido.';
      } else {
        error = '';
      }
    }
    return error;
  }
  /*
  private validatePassword(control: AbstractControl) {
  const password = control.value;
  let error = null;
  if (!password.includes('$')) {
    error = { ...error, dollar: 'needs a dollar symbol' };
  }
  if (!parseFloat(password[0])) {
    error = { ...error, number: 'must start with a number' };
  }
  return error;
}
  */
  /*@END: Validations*/
}
