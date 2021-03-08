import { Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import {
  ADD,
  MINUS,
  CounterActionTypes,
  CounterState
} from './types'

export const add = (): CounterActionTypes => {
  return {
    type: ADD
  }
}
export const minus = (): CounterActionTypes => {
  return {
    type: MINUS
  }
}

// 异步的 action
export function asyncAdd () :ThunkAction<void,CounterState,unknown,Action<any>>{
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 1000)
  }
}
