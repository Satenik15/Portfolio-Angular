import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';
import { LucideIconData } from 'lucide-angular/icons/types';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  icons = icons;
}
