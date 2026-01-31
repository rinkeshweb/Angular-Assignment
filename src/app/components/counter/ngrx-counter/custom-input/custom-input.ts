import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { CounterState } from '../states/counter.state';
import { onCustomUpdate } from '../states/conter.actions';

@Component({
  selector: 'app-custom-input',
  imports: [InputGroupModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css',
})
export class CustomInput {
  store = inject<Store<{ counter: CounterState }>>(Store);
  customInput = signal<number>(0);

  onCustomIncrease() {
    console.log(this.customInput())
    this.store.dispatch(onCustomUpdate({ value: Number(this.customInput()) }))
  }

}
