import { Component } from '@angular/core';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
  selector: 'app-project-card',
  imports: [SkillTagComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  isModalOpen = false;
  image =
    'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop';
}
