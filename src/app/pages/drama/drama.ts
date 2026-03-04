import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-drama',
  imports: [RouterModule],
  templateUrl: './drama.html',
  styleUrl: './drama.css',
})
export class Drama {

  tracks = [
    {id:'drama', title:"Drama"},
    {id:'trickortrick', title:"Trick or Trick"},
    {id:'dontblink', title:"Don't Blink"},
    {id:'hotairballoon', title:"Hot Air Balloon"},
    {id:'yolo', title:"Yolo"},
    {id:'you', title:"You"},
    {id:'betterthings', title:"Better Things"},

  ]
}
