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

  getHero(id: number): Observable<Hero>{
    // console.log(`HeroService: fetched hero id=${id}`);
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  addRandomHeroes(): void {
    const randomHero = HEROES[Math.floor(Math.random() * HEROES.length)];
    HEROES.push(randomHero);
  }
}
