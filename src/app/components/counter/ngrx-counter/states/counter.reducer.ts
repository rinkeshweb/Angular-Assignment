import { createReducer, on } from "@ngrx/store";
import { onDecrease, onIncrease, onReset, onCustomUpdate } from "./conter.actions";
import { initialState } from "./counter.state";

export const CounterReducer = createReducer(
  initialState,
  on(onIncrease, (state) => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }),
  on(onDecrease, (state) => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }),
  on(onReset, (state) => {
    return {
      ...state,
      counter: 0
    }
  }),
  // update counter value
  on(onCustomUpdate, (state, { value }) => {
    return {
      ...state,
      counter: state.counter + value
    }
  })

)
