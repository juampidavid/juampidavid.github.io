import { Component } from '@angular/core';
import { SkillTagComponent } from '../../../../shared/components/skill-tag/skill-tag.component';

@Component({
  selector: 'app-experience-card',
  imports: [SkillTagComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
})
export class ExperienceCardComponent {}
