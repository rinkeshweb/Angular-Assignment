import { Component } from '@angular/core';
import { TabsModule } from 'primeng/tabs';
import { InputOutputCounter } from "./input-output-counter/input-output-counter";
import { RxjsCounter } from "./rxjs-counter/rxjs-counter";
import { NgrxCounter } from "./ngrx-counter/ngrx-counter";

@Component({
  selector: 'app-counter',
  imports: [TabsModule, InputOutputCounter, RxjsCounter, NgrxCounter],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

}
