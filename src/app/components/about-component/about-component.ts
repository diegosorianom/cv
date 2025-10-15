import { Component } from '@angular/core';
import { AboutMe, AboutMeData } from '../../data/about-data';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css'
})
export class AboutComponent {
  aboutMeData: AboutMe = AboutMeData
}
