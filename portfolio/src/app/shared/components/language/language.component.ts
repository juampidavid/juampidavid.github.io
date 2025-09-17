import { Component, signal, inject, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { ConfigService } from '../../../core/services/config.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-language',
  imports: [],
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public isOpen = signal<boolean>(false);
  public currentLanguage = signal<string>('');
  public availableLanguages = signal<string[]>(['es', 'en']);

  private configService = inject(ConfigService);

  ngOnInit() {
    this.configService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe((language) => {
        console.log(language);
        this.currentLanguage.set(language);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  toggleDropdown() {
    this.isOpen.set(!this.isOpen());
  }

  selectLanguage(language: string) {
    if (language !== this.currentLanguage()) {
      this.configService.setLanguage(language);
      this.currentLanguage.set(language);
    }

    this.isOpen.set(false);
  }

  onBlur(event: FocusEvent) {
    // Close dropdown if focus moves outside the component
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!relatedTarget || !relatedTarget.closest('.language-selector')) {
      this.isOpen.set(false);
    }
  }
}
