import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// Application configuration
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
}