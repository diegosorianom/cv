import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { WorkExperience, WorkExperienceData } from '../../data/experience-data';
import { RouterLink } from '@angular/router';
import { phosphorArrowUpRight } from '@ng-icons/phosphor-icons/regular'

@Component({
  selector: 'app-experience-component',
  imports: [RouterLink, NgIcon],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.css',
  viewProviders: provideIcons({ phosphorArrowUpRight })
})
export class ExperienceComponent {
  workExperiencie: WorkExperience[] = WorkExperienceData;
}
