import { Component, EventEmitter, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter-buttons',
  imports: [ButtonModule],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  value = input();

  onDecrease() {

  }

  onIncrease() {

  }

  onReset() {

  }

}
