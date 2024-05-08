import { AfterViewInit, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import * as icons from 'lucide-angular';
import { DeviceDetectService } from 'src/services/device-detect.service';
import { ThemeModeService } from 'src/services/theme-mode.service';
import { ThemeMode } from 'src/models/theme-mode.model';
import { IIconItem } from 'src/models/icon-item.model';
import { ClickOutsideDirective } from 'src/directives/click-outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    ClickOutsideDirective
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private deviceDetectService = inject(DeviceDetectService);

  public themeModeService = inject(ThemeModeService);

  headerSections: IIconItem[] = [
    {
      name: 'home',
      icon: icons.Home
    },
    {
      name: 'about',
      icon: icons.ContactRound
    },
    {
      name: 'skills',
      icon: icons.FileBadge
    },
    {
      name: 'projects',
      icon: icons.FolderOpenDot
    },
    {
      name: 'contact',
      icon: icons.AtSign
    }
  ];

  icons = icons;
  isOpen!: boolean;
  isMenuOpen!: boolean;
  isMobile!: boolean;

  ngOnInit(): void {
    this.isMobile = this.deviceDetectService.isMobile;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeModeService.setCurrentMode();
    })
  }

  onChangeCurrentMode(mode: ThemeMode) {
    this.themeModeService.changeCurrentMode(mode);
  }

  scrollIntoView(elem: string) {
    document.querySelector('#' + elem)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
