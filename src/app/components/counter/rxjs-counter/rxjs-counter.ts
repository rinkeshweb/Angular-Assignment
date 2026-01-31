import { Component, signal } from '@angular/core';
import { CounterValue } from "./counter-value/counter-value";
import { CounterButtons } from "./counter-buttons/counter-buttons";

@Component({
  selector: 'app-rxjs-counter',
  imports: [CounterValue, CounterButtons],
  templateUrl: './rxjs-counter.html',
  styleUrl: './rxjs-counter.css',
})
export class RxjsCounter {
  counter = signal<number>(0);

  onDecrease() {
    this.counter.update(v => v - 1)
  }

  onIncrease() {
    this.counter.update(v => v + 1)
  }

  onReset() {
    this.counter.set(0)
  }
}
