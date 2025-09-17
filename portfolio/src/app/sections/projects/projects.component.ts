import { Component } from '@angular/core';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { ProjectModalComponent } from '../../shared/components/project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, ProjectModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  isModalOpen = false;
}
