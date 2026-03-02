import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Members } from './pages/members/members';

import { About } from './pages/about/about';
import { Tracks } from './pages/tracks/tracks';
import { Gallery } from './pages/gallery/gallery';
import { Karina } from './pages/karina/karina';
import { Winter } from './pages/winter/winter';
import { Ningning } from './pages/ningning/ningning';
import { Giselle } from './pages/giselle/giselle';

import { Blackmamba } from './pages/blackmamba/blackmamba';
import { Savage } from './pages/savage/savage';
import { Armageddon } from './pages/armageddon/armageddon';
import { Girl } from './pages/girl/girl';
import { Myworld } from './pages/myworld/myworld';
import { Drama } from './pages/drama/drama';

export const routes: Routes = [
    {path: '', component:Home},
    {path: 'members', component:Members},
    {path: 'tracks', component:Tracks},
    {path: 'gallery', component:Gallery},
    {path: 'about', component:About},
    {path: 'karina', component:Karina},
    {path: 'winter', component:Winter},
    {path: 'ningning', component:Ningning},
    {path: 'giselle', component:Giselle},
    {path: 'blackmamba', component:Blackmamba},
    {path: 'savage', component:Savage},
    {path: 'armageddon', component:Armageddon},
    {path: 'girl', component:Girl},
    {path: 'myworld', component:Myworld},
    {path: 'drama', component:Drama},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
