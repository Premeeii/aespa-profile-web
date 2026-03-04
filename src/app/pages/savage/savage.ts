import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-savage',
  imports: [RouterModule],
  templateUrl: './savage.html',
  styleUrl: './savage.css',
})
export class Savage {
  tracks = [
    {id:"aenergy",title:"aenergy", url:""},
    {id:"Savage", title:"Savage", url:""},
    {id:"illmakeyoucry", title:"I'll Make You Cry", url:""},
    {id:"yeppiyeppi", title:"YEPPI YEPPI", url:""},
    {id:"iconic", title:"ICONIC", url:""},
    {id:"luciddream", title:"Lucid Dream", url:""},
  ]
}
