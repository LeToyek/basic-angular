import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../../domain/model/housing-location';
import { CommonModule } from '@angular/common';
import { HousingService } from '../../domain/services/housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter/>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
        *ngFor="let location of filteredLocationList"
        [housingLocation]="location"
      ></app-housing-location>
    </section>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  filterResults(text:string){
    if (!text){
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    console.log(`Filtering by ${text}`);
    this.filteredLocationList = this.housingLocationList.filter((location)=>{
      return location.city.toLowerCase().includes(text.toLowerCase());
    });
    console.log(`Filtered list: ${this.filteredLocationList}`);
  }

  async ngOnInit() {
    this.housingLocationList = await this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }


  constructor() {

  }
}
