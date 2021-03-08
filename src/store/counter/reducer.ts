import { ADD, MINUS, CounterState, CounterActionTypes } from "./types";

const INITIAL_STATE: CounterState = {
  num: 0
};

export default function counter(
  state = INITIAL_STATE,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
}
