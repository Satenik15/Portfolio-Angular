import { Component } from '@angular/core';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';
import { ISkill } from 'src/models/skill.model';
import { responsibilityData } from './utils/responsibility.data';
import { IIconItem } from 'src/models/icon-item.model';
import { LucideAngularModule } from 'lucide-angular';
import { skillData } from './utils/skill.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    ProgressBarComponent,
    LucideAngularModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  responsibilities: IIconItem[] = responsibilityData;

  skills: ISkill[] = skillData; 

}
