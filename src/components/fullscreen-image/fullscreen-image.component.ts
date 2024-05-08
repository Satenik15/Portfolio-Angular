import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';

@Component({
  selector: 'app-fullscreen-image',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule
  ],
  templateUrl: './fullscreen-image.component.html',
  styleUrl: './fullscreen-image.component.css'
})
export class FullscreenImageComponent {
  @Input() imageUrl!: string;
  @Output() closeFullScreen: EventEmitter<void> = new EventEmitter();

  icons = icons;
}
