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
        loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent),
        pathMatch: 'full',
      },
      {
        path: 'tracks',
        loadComponent: () => import('./modules/tracks/tracks.component').then(m => m.TracksComponent)
      },
      {
        path:'favourites',
        loadComponent: () => import('./modules/favourites/favourites.component').then(m => m.FavouritesComponent)
      }
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./layouts/empty-layout/empty-layout.component').then(m => m.EmptyLayoutComponent),
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

      },
      {
        path: 'login',
        loadComponent: () => import('./modules/auth/auth.component').then(m => m.AuthComponent)
      }
    ]
  }

]; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes), provideClientHydration(withEventReplay())]
};
