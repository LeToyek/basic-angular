import { Component } from '@angular/core';
import { Hero } from '../../domain/model/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../domain/repositories/mock-heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }
  heroes: Hero[] = HEROES
  selectedHero?: Hero;

  onSelect(hero:Hero){
    this.selectedHero = hero;
  }
}
