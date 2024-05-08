import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/animations/fade-in.animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  animations: [fadeInAnimation]
})
export class AboutComponent {

}
