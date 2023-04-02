import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.routes').then((m) => m.routes),
    canActivate: [async() => await inject(AuthService).authGuard()]
  },
  {
    path: 'intro',
    loadComponent: () => import('./auth-screens/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'auth-screen',
    loadComponent: () => import('./auth-screens/auth-screen/auth-screen.page').then( m => m.AuthScreenPage),
    canMatch: [async() => await inject(AuthService).introGuard()]
  },
];
