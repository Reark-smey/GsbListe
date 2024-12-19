import { Component } from '@angular/core';
import {Routes, Router, RouterLinkActive, RouterLink} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
