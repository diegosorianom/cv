import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';
import { NgIcon, provideIcons } from "@ng-icons/core";
import { phosphorArrowLeft } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'app-experience-page',
  imports: [MarkdownComponent, RouterLink, NgIcon],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.css',
  viewProviders: provideIcons({ phosphorArrowLeft })
})
export class ExperiencePage {
  private route = inject(ActivatedRoute)

  company = this.route.snapshot.paramMap.get('company')
  markdownPath = '';

  ngOnInit() {
    if (this.company) {
      this.markdownPath = `experience/${this.company}.md`;
    }
  }
}
