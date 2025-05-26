import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

 export const routes: Routes = [
    {
    path: '',
    loadComponent: () => import('./layouts/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'tracks',
        loadComponent: () => import('./modules/tracks/tracks.component').then(m => m.TracksComponent)
      }
    ]
  },
  {
    path: '',
    loadComponent: () => import('./layouts/empty-layout/empty-layout.component').then(m => m.EmptyLayoutComponent),
    children: [
      {
        path: 'auth',
        loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent)
      }
    ]
  }

]; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes), provideClientHydration(withEventReplay())]
};
