import { Component } from '@angular/core';
import { Proyects, ProyectsData } from '../../data/proyects-data';

@Component({
  selector: 'app-proyects-component',
  imports: [],
  templateUrl: './proyects-component.html',
  styleUrl: './proyects-component.css'
})
export class ProyectsComponent {
  proyects: Proyects[] = ProyectsData;
}
