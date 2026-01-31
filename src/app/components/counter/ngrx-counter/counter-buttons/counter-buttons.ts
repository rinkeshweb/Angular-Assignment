import { Component, EventEmitter, inject, input, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CounterState } from '../states/counter.state';
import { onDecrease, onIncrease, onReset } from '../states/conter.actions';

@Component({
  selector: 'app-counter-buttons',
  imports: [ButtonModule],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  store = inject<Store<{ counter: CounterState }>>(Store);

  value = this.store.selectSignal(state => state.counter.counter);

  onDecrease() {
    this.store.dispatch(onDecrease())
  }

  onIncrease() {
    this.store.dispatch(onIncrease())
  }

  onReset() {
    this.store.dispatch(onReset())
  }

}
