import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

 export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./modules/home/home.component').then(m => m.HomeComponent)    
    },
    {
      path:'tracks',
      loadComponent: () => import('./modules/tracks/tracks.component').then(m => m.TracksComponent)
    }
]; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes), provideClientHydration(withEventReplay())]
};
