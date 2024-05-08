import { Component, Input } from '@angular/core';
import { ISkill } from 'src/models/skill.model';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progress!: ISkill;

}
