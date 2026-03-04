import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-armageddon',
  imports: [RouterModule],
  templateUrl: './armageddon.html',
  styleUrl: './armageddon.css',
})
export class Armageddon {

  tracks = [
    {id:'supernova', title: 'Supernova'},
    {id:'armageddon', title: 'Armageddon'},
    {id:'setthetone', title: 'Set the tone'},
    {id:'mine', title: 'Mine'},
    {id:'licorice', title: 'Licorice'},
    {id:'bahama', title: 'BAHAMA'},
    {id:'longchat', title: 'Long Chat(#♥)'},
    {id:'prologue', title: 'Prologue'},
    {id:'livemylife', title: 'Live My Life'},
    {id:'melody', title: 'Melody'},
  ]

}
