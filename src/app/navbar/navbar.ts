import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-navbar',
  imports: [RouterModule, NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

}
