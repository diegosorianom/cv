import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core'
import { Projects, ProjectsData } from '../../data/projects-data';
import { RouterLink } from '@angular/router';
import { phosphorArrowUpRight } from '@ng-icons/phosphor-icons/regular'
import { SlugService } from '../../services/slug.service';

@Component({
  selector: 'app-projects-component',
  imports: [RouterLink, NgIcon],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.css',
  viewProviders: provideIcons({ phosphorArrowUpRight })
})
export class ProjectsComponent {
  projects: Projects[] = ProjectsData;

  constructor(private slugService: SlugService) {}

  getProjectSlug(name: string): string {
    return this.slugService.slugify(name);
  }
}
