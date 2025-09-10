import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private defaultLanguage = 'en';
  private currentLanguageSubject = new BehaviorSubject<string>(
    this.defaultLanguage
  );
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  public getDefaultLanguage(): string {
    return this.defaultLanguage;
  }

  public getCurrentLanguage(): string {
    return this.currentLanguageSubject.getValue();
  }

  public setLanguage(language: string) {
    this.currentLanguageSubject.next(language);
  }
}
