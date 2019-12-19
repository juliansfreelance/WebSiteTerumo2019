import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private _http: HttpClient) { }

  sendMessage(body){
    return this._http.post('https://murmuring-tundra-11198.herokuapp.com/formulario',body);
  }
}
