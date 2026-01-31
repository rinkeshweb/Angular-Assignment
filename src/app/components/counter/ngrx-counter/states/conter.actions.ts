import { createAction, props } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const onIncrease = createAction('onIncrease')
export const onDecrease = createAction('onDecrease')
export const onReset = createAction('onReset')

// Update number with props
export const onCustomUpdate = createAction('onCustomUpdate', props<{ value: number }>())
