import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { getBaseUrl } from 'src/main';
import { ContactForm } from '../models/contactForm';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  path: string = getBaseUrl() + "api/ContactForms/";
  constructor(private http: HttpClient) { }

  submit(contactForm: ContactForm) {
    return this.http.post(this.path + "Add", contactForm);
  }
}
