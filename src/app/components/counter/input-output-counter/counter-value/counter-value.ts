import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-counter-value',
  imports: [],
  templateUrl: './counter-value.html',
  styleUrl: './counter-value.css',
})
export class CounterValue {
  value = input<number>(0);
}
