import { Component, OnInit } from '@angular/core';
import { Hero } from '../../domain/model/hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../domain/repositories/mock-heroes';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from '../../domain/services/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from '../../domain/services/message.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule,FormsModule,HeroDetailComponent,MessagesComponent,RouterLink],
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  }
  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero:Hero){
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
}
