import { Component } from '@angular/core';
import { ContactCardComponent } from '../../shared/components/contact-card/contact-card.component';

@Component({
  selector: 'app-contact',
  imports: [ContactCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
