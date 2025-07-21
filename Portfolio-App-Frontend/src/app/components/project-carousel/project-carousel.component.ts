import { Component, signal } from '@angular/core';
import { Project } from '../../models/project.type';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-carousel',
  imports: [NgFor],
  standalone: true,
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.scss'
})

export class ProjectCarouselComponent {

  constructor(private sanitizer: DomSanitizer) {
  }

  safeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  projectItems = signal<Array<Project>>([
    {
      title: "Green Tech Holdings",
      id: 1,
      url: "https://greentechholdings.co.za",
    },
    {
      title: "Geek for Geeks",
      id: 2,
      url: "https://www.geeksforgeeks.org",
    },
    {
      title: "ABC Consortium",
      id: 3,
      url: "https://afribusconsortium.com/",
    },
    {
      title: "Black Business Council",
      id: 4,
      url: "https://bbcbefoundation.org/",
    },
    {
      title: "ABC Consortium",
      id: 5,
      url: "https://afribusconsortium.com/",
    },
  ]);

   trackById(index: number, project: Project) {
    return project.id;
  }
}
