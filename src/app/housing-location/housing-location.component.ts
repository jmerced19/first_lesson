import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housinglocation!: HousingLocation;

}
