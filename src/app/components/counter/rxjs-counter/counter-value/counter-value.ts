import { Component, inject, input, output, signal } from '@angular/core';
import { CounterService } from '../../../../core/services/counter-service';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  counterService = inject(CounterService);

  value = this.counterService.$count;

}
