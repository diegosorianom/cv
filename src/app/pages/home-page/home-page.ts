import { Component } from '@angular/core';
import { AboutComponent } from "../../components/about-component/about-component";
import { ExperienceComponent } from "../../components/experience-component/experience-component";
import { ProyectsComponent } from "../../components/proyects-component/proyects-component";
import { EducationComponent } from "../../components/education-component/education-component";
import { ContactComponent } from "../../components/contact-component/contact-component";

@Component({
  selector: 'app-home-page',
  imports: [AboutComponent, ExperienceComponent, ProyectsComponent, EducationComponent, ContactComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
