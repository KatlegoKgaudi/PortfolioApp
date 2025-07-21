import { Component } from '@angular/core';
import { ProjectCarouselComponent } from '../components/project-carousel/project-carousel.component';

@Component({
  selector: 'app-projects',
  imports: [ProjectCarouselComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
