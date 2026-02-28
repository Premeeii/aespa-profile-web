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
    {id:1, title: 'Supernova', url:'https://youtu.be/phuiiNCxRMg?si=5xYq9cZlxucuzUEK'},
    {id:2, title: 'Armageddon', url:'https://youtu.be/nFYwcndNuOY?si=m9f7cOdU78fLKMhu'},
    {id:3, title: 'Set the tone', url:'https://youtu.be/8_4Debx0YlQ?si=ege5qAdl0fQUp8kc'},
    {id:4, title: 'Mine', url:'https://youtu.be/SguQN1R1Ojs?si=NTAypvPbZQyk8qFm'},
    {id:5, title: 'Licorice', url:'https://youtu.be/Xf4RqFYUpAU?si=51ulQjqssrwR6X9W'},
    {id:6, title: 'BAHAMA', url:'https://youtu.be/44NE7bVKAYc?si=Ba-IXflp84f3Y6MA'},
    {id:7, title: 'Long Chat(#♥)', url:'https://youtu.be/USr5C0QXMVw?si=MIHX7tIE9ZvpI38l'},
    {id:8, title: 'Prologue', url:'https://youtu.be/P8Zd56wknlk?si=q6G_6PgfubyDaxLC'},
    {id:9, title: 'Live My Life', url:'https://youtu.be/YEA1ROHi0Eg?si=1N9f_xctNCQ6Gd0D'},
    {id:10, title: 'Melody', url:'https://youtu.be/IdxYqQloU4w?si=FZm_akfjDznQMY42'},
  ]

}
