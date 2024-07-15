import { Routes } from '@angular/router';
import { authGuard } from '@features/auth/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadComponent: () => import('@features/youtube/pages/main-page/main-page.component').then(
      (m) => m.MainPageComponent
    ),
    canMatch: [authGuard]
  },
  {
    path: 'detailed-info/:id',
    loadComponent: () => import(
      '@features/youtube/pages/detailed-info-page/detailed-info-page.component'
    ).then((m) => m.DetailedInfoPageComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('@features/auth/pages/login/login-page.component').then(
      (m) => m.LoginPageComponent
    ),
  },
  {
    path: '**',
    loadComponent: () => import('@core/components/page-not-found/page-not-found.component').then(
      (m) => m.PageNotFoundComponent
    ),
  },
];
