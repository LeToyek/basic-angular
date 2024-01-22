import { Injectable } from '@angular/core';
import { Hero } from '../model/hero';
import { HEROES } from '../repositories/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES)
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  addRandomHeroes(): void {
    const randomHero = HEROES[Math.floor(Math.random() * HEROES.length)];
    HEROES.push(randomHero);
  }
}
