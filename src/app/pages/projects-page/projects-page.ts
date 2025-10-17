import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { phosphorArrowLeft } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-projects-page',
  imports: [MarkdownComponent, RouterLink, NgIcon],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.css',
  viewProviders: provideIcons({ phosphorArrowLeft })
})
export class ProjectsPage {
  private route = inject(ActivatedRoute)

  project = this.route.snapshot.paramMap.get('name')
  markdownPath = '';

  ngOnInit() {
    if (this.project) {
      this.markdownPath = `project/${this.project}.md`;
    }
  }
}
