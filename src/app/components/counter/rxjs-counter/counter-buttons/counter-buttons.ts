import { Component, EventEmitter, inject, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CounterService } from '../../../../core/services/counter-service';

@Component({
  selector: 'app-counter-buttons',
  imports: [ButtonModule],
  templateUrl: './counter-buttons.html',
  styleUrl: './counter-buttons.css',
})
export class CounterButtons {
  counterService = inject(CounterService);

  value = this.counterService.$count;

  onDecrease() {
    this.counterService.decrease()
  }

  onIncrease() {
    this.counterService.increase()
  }

  onReset() {
    this.counterService.reset()
  }

}
