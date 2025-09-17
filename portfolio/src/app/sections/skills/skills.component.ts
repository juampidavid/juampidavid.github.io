import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { SkillCardComponent } from '../../shared/components/skill-card/skill-card.component';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-skills',
  imports: [SkillCardComponent, SectionTitleComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  private destroy$ = new Subject<void>();
}
