import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private readonly _count = signal<number>(0);
  readonly $count = this._count;

  decrease() {
    this.$count.update(v => v - 1)
  }

  increase() {
    this.$count.update(v => v + 1)
  }

  reset() {
    this.$count.set(0)
  }

}
