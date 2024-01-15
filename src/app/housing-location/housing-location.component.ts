import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [],
  template: `
    <h1>test</h1>
  `,
  styleUrl: './housing-location.component.scss',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation
}
