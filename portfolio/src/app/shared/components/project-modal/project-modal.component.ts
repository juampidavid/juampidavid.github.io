import { Component } from '@angular/core';
import { SkillTagComponent } from '../skill-tag/skill-tag.component';

@Component({
  selector: 'app-project-modal',
  imports: [SkillTagComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.scss',
})
export class ProjectModalComponent {
  gallery = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=600&fit=crop',
  ];

  technologies = ['Angular', 'React', 'Vue', 'Svelte'];
}
