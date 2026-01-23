import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/dataModels/model';
import { JsonDataService } from 'src/app/services/dataService/JsonDataService';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  standalone: false,
})
export class ProjectComponent  implements OnInit {
    projects!: Observable<Project[]>
      // Mapping platform names to Ionic icons for better visual display
      platformIcons: { [key: string]: any } = {
        'iOS': 'logo-apple',
        'Android': 'logo-android',
        'Web': 'globe-outline',
        'Desktop': 'desktop-outline',
      };

  constructor(private jsonDataService: JsonDataService) { }

  ngOnInit() {
    this.projects = this.jsonDataService.getProjects() || [];
    this.onSlideChanged();
  }

  getPlatformIcon(platform: string): string {
    return this.platformIcons[platform] || 'code-slash-outline';
  }


  activeIndex = 0;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: false,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };


  async onSlideChanged() {
  //   if (this.slides) {
  //     // const index = await this.slides.getActiveIndex();
  //     // this.activeIndex = index;
  //   }
  }

}
