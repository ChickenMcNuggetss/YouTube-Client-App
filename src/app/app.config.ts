import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { ApiInterceptor } from '@core/interceptors/api-interceptor';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { VideosEffects } from './store/effects/videos.effects';
import { videosReducer } from './store/reducers/videos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([ApiInterceptor])),
    provideStore({ youtube: videosReducer }),
    provideEffects(VideosEffects)
  ],
};
