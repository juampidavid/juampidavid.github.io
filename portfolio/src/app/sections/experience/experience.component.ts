import { Component } from '@angular/core';
import { ExperienceCardComponent } from '../../shared/components/experience-card/experience-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-experience',
  imports: [ExperienceCardComponent, SectionTitleComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {}
