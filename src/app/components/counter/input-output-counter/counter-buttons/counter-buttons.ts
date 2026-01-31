import { Component, EventEmitter, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-counter-buttons',
  imports: [ButtonModule],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  outDecrease = output();
  outIncrease = output();
  outReset = output();

  value = input();

  onDecrease() {
    this.outDecrease.emit()
  }

  onIncrease() {
    this.outIncrease.emit()
  }

  onReset() {
    this.outReset.emit()
  }

}
