import { Routes } from '@angular/router';
import { HomeComponent } from '../presentation/home/home.component';
import { DetailsComponent } from '../presentation/details/details.component';
import { HeroesComponent } from '../presentation/heroes/heroes.component';
import { HeroDetailComponent } from '../presentation/heroes/hero-detail/hero-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details',
  },
  {
    path: 'heroes',
    component: HeroesComponent,
    title: 'Heroes page',
  },
  {
    path: 'heroes/:id',
    component: HeroDetailComponent,
    title: 'Hero details',
  }
];
