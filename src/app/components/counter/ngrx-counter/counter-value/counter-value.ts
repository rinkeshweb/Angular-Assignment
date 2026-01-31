import { Component, inject, input, output, signal } from '@angular/core';
import { CounterState } from '../states/counter.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  store = inject<Store<{ counter: CounterState }>>(Store)
  value = this.store.selectSignal(state => state.counter.counter);
}
