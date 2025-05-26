import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';


import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout/empty-layout.component';
import { HomeComponent } from '@modules/home/home.component';
import { AuthComponent } from '@modules/auth/auth.component';
import { TracksComponent } from '@modules/tracks/tracks.component';

 export const routes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path:'tracks',
        loadComponent() {
          
        },
      }
    ]
  },
  {
    path: 'auth',
    component: EmptyLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

      },
      {
        path: 'login',
        component: AuthComponent
      }
    ]
  }

]; 

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(routes), provideClientHydration(withEventReplay())]
};
