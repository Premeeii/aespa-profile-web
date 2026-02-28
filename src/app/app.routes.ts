import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Members } from './pages/members/members';
import { News } from './pages/news/news';
import { About } from './pages/about/about';
import { Tracks } from './pages/tracks/tracks';

import { Karina } from './pages/karina/karina';
import { Winter } from './pages/winter/winter';
import { Ningning } from './pages/ningning/ningning';
import { Giselle } from './pages/giselle/giselle';

import { Blackmamba } from './pages/blackmamba/blackmamba';
import { Armageddon } from './pages/armageddon/armageddon';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'members', component:Members},
    {path: 'tracks', component:Tracks},
    {path: 'news', component:News},
    {path: 'about', component:About},
    {path: 'karina', component:Karina},
    {path: 'winter', component:Winter},
    {path: 'ningning', component:Ningning},
    {path: 'giselle', component:Giselle},
    {path: 'blackmamba', component:Blackmamba},
    {path: 'armageddon', component:Armageddon},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
