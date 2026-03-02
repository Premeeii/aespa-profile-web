import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {

  selectedImage: string | null = null;

  openModal(image:string){
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }

}
