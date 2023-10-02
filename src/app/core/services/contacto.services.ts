import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from '../models/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  private apiUrl = 'https://localhost:7139/api/contacto';

  constructor(private http: HttpClient) { }

  getContactos(): Observable<Contacto[]> {
    return this.http.get<Contacto[]>(this.apiUrl);
  }
}
