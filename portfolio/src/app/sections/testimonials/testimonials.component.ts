import { Component } from '@angular/core';
import { TestimonialCardComponent } from '../../shared/components/testimonial-card/testimonial-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-testimonials',
  imports: [TestimonialCardComponent, SectionTitleComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {}
