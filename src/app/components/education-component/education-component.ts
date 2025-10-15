import { Component } from '@angular/core';
import { Education, EducationData } from '../../data/education-data';

@Component({
  selector: 'app-education-component',
  imports: [],
  templateUrl: './education-component.html',
  styleUrl: './education-component.css'
})
export class EducationComponent {
  education: Education[] = EducationData;
}
