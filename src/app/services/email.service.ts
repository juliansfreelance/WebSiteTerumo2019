import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  sendMessage(body){
    return this._http.post('https://mail-node-terumo.herokuapp.com/formulario',body);
  }
}
