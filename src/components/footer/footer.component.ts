import { Component, OnInit } from '@angular/core';
import { Heart, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  currentYear!: number;

  heartIcon = Heart;

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
  
}
