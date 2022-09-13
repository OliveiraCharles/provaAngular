import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }

  consultaCep(cep: String) {
    console.log(cep)
    return this.http.get(`//viacep.com.br/ws/${cep}/json`)
  }
}
