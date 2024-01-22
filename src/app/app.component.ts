import { Component, DestroyRef, ViewChild, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './presentation/home/home.component';
import * as AOS from "aos"
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <div class="flex items-center">
        <a [routerLink]="['/']">
          <header class="brand-name p-6" >
            <img
              class="brand-logo"
              src="/assets/logo.svg"
              alt="logo"
              aria-hidden="true"
            />
          </header>
        </a>
        <a [routerLink]="['/heroes']">
          <h1 class="font-bold hover:text-purple-400">Heroes Game</h1>
        </a>
      </div>
      <section class="content p-6">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  // styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
})
export class AppComponent implements OnInit{
  ngOnInit(){
    AOS.init();
  }
}
