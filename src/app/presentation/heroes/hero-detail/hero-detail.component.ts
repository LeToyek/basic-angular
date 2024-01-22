import { Component, Input, inject } from '@angular/core';
import { Hero } from '../../../domain/model/hero';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../../../domain/services/hero.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent {
  // @Input() hero?: Hero;

  hero?: Hero;

  heroService: HeroService = inject(HeroService);
  route: ActivatedRoute = inject(ActivatedRoute)
  location: Location = inject(Location);

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero():void{
    // console.log("test");
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
}
