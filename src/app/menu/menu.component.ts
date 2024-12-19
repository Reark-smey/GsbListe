import { Component } from '@angular/core';
import {Routes, Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
