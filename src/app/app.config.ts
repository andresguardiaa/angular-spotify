import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter,Routes } from '@angular/router';


import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { EjemploComponent } from './ejemplo/ejemplo.component';

export const routes: Routes = [
  {
    path: '',
    component: EjemploComponent
  }
];

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};
