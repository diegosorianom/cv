import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-experience-page',
  imports: [MarkdownComponent],
  templateUrl: './experience-page.html',
  styleUrl: './experience-page.css'
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
