import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tracks',
  imports: [RouterModule],
  templateUrl: './tracks.html',
  styleUrl: './tracks.css',
})
export class Tracks {

    albums = [
      {uri:'savage.jpg', path:'/'},
      {uri:'armageddon.jpg', path:'/armageddon'},
      {uri:'girls.jpg', path:'/'},
      {uri:'myworld.jpg', path:'/'},
      {uri:'drama.jpg', path:'/'},
    ]

    singles = [
      {uri:"blackmamba.png", path:'/blackmamba'},
      {uri:'forever.png', path:'/'},
      {uri:'nextlevel.jpg', path:'/'},
      {uri:'illusion.jpg', path:'/'},
      {uri:'lifetooshort.jpg', path:'/'},
      {uri:'beutifulchristmas.jpg', path:'/'},
      {uri:'holdontight.jpg', path:'/'},
      {uri:'welcometomyworld.jpg', path:'/'},
      {uri:'betterthing.jpg', path:'/'},
      {uri:'zoomzoom.jpg', path:'/'},
      {uri:'jigglebellrock.png', path:'/'},
      {uri:'regretofthetime.png', path:'/'},
      {uri:'dietrying.jpg', path:'/'},
      {uri:'supernova.png', path:'/'},
      {uri:'whiplash.webp', path:'/'},
      {uri:'dirtywork.png', path:'/'},
      {uri:'darkarts.webp', path:'/'},
      {uri:'richman.webp', path:'/'}
    ]
}
