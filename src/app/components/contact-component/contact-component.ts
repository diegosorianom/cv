import { Component } from '@angular/core';
import { Contact, ContactData } from '../../data/contact-data';

@Component({
  selector: 'app-contact-component',
  imports: [],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css'
})
export class ContactComponent {
  contact: Contact = ContactData;
}
