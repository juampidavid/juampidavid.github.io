import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { LanguageComponent } from './components/language/language.component';
import { Subject, takeUntil } from 'rxjs';
import { ConfigService } from '../../core/services/config.service';
import { NavigationItem } from '../../core/models/navigationItem';
import { Translation, getTranslation } from './translations';

@Component({
  selector: 'app-header',
  imports: [LanguageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private translation: Translation | undefined;
  private configService = inject(ConfigService);

  ngOnInit(): void {
    this.configService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        this.translation = getTranslation(language);
        this.navigationItems.set([
          { title: this.translation.home, href: '#home' },
          { title: this.translation.experience, href: '#experience' },
          { title: this.translation.projects, href: '#projects' },
          { title: this.translation.testimonials, href: '#testimonials' },
          { title: this.translation.skills, href: '#skills' },
          { title: this.translation.contact, href: '#contact' },
        ]);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public navigationItems = signal<NavigationItem[]>([]);
}
