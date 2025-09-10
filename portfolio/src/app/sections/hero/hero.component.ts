import { Component } from '@angular/core';
import { ClassicButtonComponent } from '../../shared/components/classic-button/classic-button.component';
import { CircleButtonComponent } from '../../shared/components/circle-button/circle-button.component';

@Component({
  selector: 'app-hero',
  imports: [ClassicButtonComponent, CircleButtonComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
