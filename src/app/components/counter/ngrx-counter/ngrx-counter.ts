import { Component, input, signal } from '@angular/core';
import { CounterValue } from "./counter-value/counter-value";
import { CounterButtons } from "./counter-buttons/counter-buttons";
import { CustomInput } from "./custom-input/custom-input";

@Component({
  selector: 'app-ngrx-counter',
  imports: [CounterValue, CounterButtons, CustomInput],
  templateUrl: './ngrx-counter.html',
  styleUrl: './ngrx-counter.css',
})
export class NgrxCounter {

}
