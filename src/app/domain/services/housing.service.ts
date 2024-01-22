import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housing-location';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  readonly url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocation[] = [
  ];

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const res = await fetch(`${this.url}/${id}`);
    return await res.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Application submitted for ${firstName} ${lastName} at ${email}`
    );
  }
}
