import { Component } from '@angular/core';
import { slideInFromLeftAnimation } from 'src/animations/slide-in-from-left.animation';
import { slideInFromRightAnimation } from 'src/animations/slide-in-from-right.animation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [slideInFromRightAnimation,slideInFromLeftAnimation]
})
export class HomeComponent {

  scrollIntoView(elem: string) {
    document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
