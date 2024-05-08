import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject  } from '@angular/core';
import { swiperData } from './utils/swiper.data';
import { ISwiperData } from 'src/models/swiper-data.model';
import { FullscreenImageComponent } from '../fullscreen-image/fullscreen-image.component';
import { ExternalLink, FolderCog, LucideAngularModule } from 'lucide-angular';
import { DeviceDetectService } from 'src/services/device-detect.service';
import { IProject } from 'src/models/project.model';
import { porjectsData } from './utils/project.data';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    LucideAngularModule,
    FullscreenImageComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectsComponent {
  private deviceDetectService = inject(DeviceDetectService);

  swiperData: ISwiperData[] = swiperData;
  fullscreenImageUrl!: string;
  folderCog = FolderCog;
  externalLink = ExternalLink;

  isMobile!: boolean;

  projects: IProject[] = porjectsData;

  ngOnInit(): void {
    this.isMobile = this.deviceDetectService.isMobile;
  }

  openFullscreen(imageUrl: string) {
    this.fullscreenImageUrl = imageUrl;
  }

  handleSlideClick(item: ISwiperData) {
    this.fullscreenImageUrl = 'assets/images/' + item.image;
  }
}
