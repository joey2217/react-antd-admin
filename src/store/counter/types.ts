//  constants
export const ADD = 'ADD'
export const MINUS = 'MINUS'

// state
export interface CounterState {
  num: number;
}

// action
interface AddAction {
  type: typeof ADD;
}

interface MinusAction {
  type: typeof MINUS
}

export type CounterActionTypes = AddAction | MinusAction;
