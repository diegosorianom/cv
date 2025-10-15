import { Component } from '@angular/core';
import { WorkExperience, WorkExperienceData } from '../../data/experience-data';

@Component({
  selector: 'app-experience-component',
  imports: [],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.css'
})
export class ExperienceComponent {
  workExperiencie: WorkExperience[] = WorkExperienceData;
}
