import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-myworld',
  imports: [RouterLink],
  templateUrl: './myworld.html',
  styleUrl: './myworld.css',
})
export class Myworld {

  tracks = [
    {id:'welcometomyworld', title:"Welcome To MY World(Feat. nævis)"},
    {id:'spicy', title:"Spicy"},
    {id:'saltyandsweet', title:"Salty & Sweet"},
    {id:'thirsty', title:"Thirsty"},
    {id:'imunhappy', title:"I'm Unhappy", url:''},
    {id:'tillwemeetagain', title:"Till We Meet Again"},


  ]

}
