import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about-component/about-component";
import { ExperienceComponent } from "../../components/experience-component/experience-component";

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, ExperienceComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
