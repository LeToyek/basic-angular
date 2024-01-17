import { Component, DestroyRef, ViewChild, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import * as AOS from "aos"
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
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
      <section class="content p-6">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, HomeComponent, RouterModule],
})
export class AppComponent implements OnInit{
  ngOnInit(){
    AOS.init();
  }
}
