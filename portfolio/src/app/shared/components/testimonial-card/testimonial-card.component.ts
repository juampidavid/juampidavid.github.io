import { Component } from '@angular/core';
import { CircleButtonComponent } from '../circle-button/circle-button.component';

@Component({
  selector: 'app-testimonial-card',
  imports: [CircleButtonComponent],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss',
})
export class TestimonialCardComponent {
  image: String =
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face';
}
