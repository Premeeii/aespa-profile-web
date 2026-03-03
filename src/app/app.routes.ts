import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'members', loadComponent: () => import('./pages/members/members').then((m) => m.Members) },
  { path: 'tracks', loadComponent: () => import('./pages/tracks/tracks').then((m) => m.Tracks) },
  { path: 'single/:id',  loadComponent: () => import('./pages/single/single').then(m => m.Single)},
  { path: 'gallery', loadComponent: () => import('./pages/gallery/gallery').then((m) => m.Gallery) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  { path: 'karina', loadComponent: () => import('./pages/karina/karina').then((m) => m.Karina) },
  { path: 'winter', loadComponent: () => import('./pages/winter/winter').then((m) => m.Winter) },
  { path: 'ningning', loadComponent: () => import('./pages/ningning/ningning').then((m) => m.Ningning) },
  { path: 'giselle', loadComponent: () => import('./pages/giselle/giselle').then((m) => m.Giselle) },
  { path: 'blackmamba', loadComponent: () => import('./pages/blackmamba/blackmamba').then((m) => m.Blackmamba) },
  { path: 'savage', loadComponent: () => import('./pages/savage/savage').then((m) => m.Savage) },
  { path: 'armageddon', loadComponent: () => import('./pages/armageddon/armageddon').then((m) => m.Armageddon) },
  { path: 'girl', loadComponent: () => import('./pages/girl/girl').then((m) => m.Girl) },
  { path: 'myworld', loadComponent: () => import('./pages/myworld/myworld').then((m) => m.Myworld) },
  { path: 'drama', loadComponent: () => import('./pages/drama/drama').then((m) => m.Drama) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
