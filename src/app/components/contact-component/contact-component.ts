import { Component } from '@angular/core';
import { Contact, ContactData } from '../../data/contact-data';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { phosphorArrowUpRight } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-contact-component',
  imports: [NgIcon],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.css',
  viewProviders: provideIcons({ phosphorArrowUpRight })
})
export class ContactComponent {
  contact: Contact = ContactData;
}
