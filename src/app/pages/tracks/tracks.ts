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
      {uri:'savage.jpg', path:'/savage'},
      {uri:'armageddon.jpg', path:'/armageddon'},
      {uri:'girls.jpg', path:'/girl'},
      {uri:'myworld.jpg', path:'/myworld'},
      {uri:'drama.jpg', path:'/drama'},
    ]

    singles = [
      {id:"blackmamba", uri:"blackmamba.png"},
      {id:"forever", uri:'forever.png'},
      {id:"nextlevel", uri:'nextlevel.jpg'},
      {id:"illusion", uri:'illusion.jpg'},
      {id:"lifetooshort", uri:'lifetooshort.jpg'},
      {id:"beutifulchristmas", uri:'beutifulchristmas.jpg'},
      {id:"holdontight", uri:'holdontight.jpg'},
      {id:"welcometomyworld", uri:'welcometomyworld.jpg'},
      {id:"betterthing", uri:'betterthing.jpg'},
      {id:"zoomzoom", uri:'zoomzoom.jpg'},
      {id:"jinglebellrock", uri:'jinglebellrock.png'},
      {id:"regretofthetime", uri:'regretofthetime.png'},
      {id:"dietrying", uri:'dietrying.jpg'},
      {id:"supernova", uri:'supernova.png'},
      {id:"whiplash", uri:'whiplash.webp'},
      {id:"dirtywork", uri:'dirtywork.png'},
      {id:"darkarts", uri:'darkarts.webp'},
      {id:"richman", uri:'richman.webp'},
    ]

}
