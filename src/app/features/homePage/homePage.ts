import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-home-page',
  imports: [],
  template: `<p>homePage works!</p>`,
  templateUrl: './homePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {


constructor() {
  setInterval(() => {
    console.log("x");
    this.conterSignal.update((v) => v + 1);
  }, 1000
);
}

  counter = 0;
  conterSignal = signal(0);
  
  changeValue(value: number) {
    this.counter += value;
    this.conterSignal.update((current) => current + value);
  }
   resetValue(value: number) {
    this.counter = value;
    this.conterSignal.set(value);
  }
  
 }

