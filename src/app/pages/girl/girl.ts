import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-girl',
  imports: [RouterModule],
  templateUrl: './girl.html',
  styleUrl: './girl.css',
})
export class Girl {

  tracks = [
    {id:'girls', title:"Girls"},
    {id:'illusion', title:"Illusion", },
    {id:'lingo', title:"Lingo", },
    {id:'lifestooshort', title:"Life's Too Short", },
    {id:'icu', title:"ICU", },
    {id:'lifestooshorteng', title:"Life's Too Short(English Version)", },
    {id:'blackmamba', title:"Black Mamba", },
    {id:'forever', title:"Forever", },
    {id:'dreamscometrue', title:"Dreams Come True", },
  ]

}
