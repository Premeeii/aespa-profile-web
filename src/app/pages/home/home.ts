import { Component, ChangeDetectorRef } from '@angular/core';
import { NgClass } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home  {

  images = [
    'aespa.jpg',
    'aespa2.jpg',
    'aespa3.jpg',
    'aespa4.jpg'
  ];

  constructor(private cdr: ChangeDetectorRef) {} //ขอเครื่องมือควบคุมการ re-render ของ component มาใช้เอง

  currentIndex = 0;
  subscription!: Subscription;

  
  ngOnInit() {
    this.subscription = interval(2000).subscribe(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.images.length;

        this.cdr.detectChanges(); //สั่งให้Re-renderใหม่ทุกๆ2วิที่กำหนดในinterval
    });
  }

  goToSlide(index: number) {
  this.currentIndex = index;
}

  next() {
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}