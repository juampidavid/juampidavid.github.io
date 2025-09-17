import { Component } from '@angular/core';
import { ContactCardComponent } from '../../shared/components/contact-card/contact-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-contact',
  imports: [ContactCardComponent, SectionTitleComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {}
