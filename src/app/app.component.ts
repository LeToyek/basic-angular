import { Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet]
})
export class AppComponent {
  title = 'basic-angular';

  count = 0;
  constructor() {

    const id = setInterval(() => {
      this.count++;
    }
    , 1000);
  }
  ngOnDestroy() {
    clearInterval(this.count);
  }
  ngOnInit() {
    console.log('ngOnInit');
  }

}
