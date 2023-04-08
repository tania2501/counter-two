import { Reducer } from "@reduxjs/toolkit";
import{ ChangeEvent } from "react";

const ON_CLICK_PLUS = 'ON_CLICK_PLUS'
const ON_CLICK_RESET = 'ON_CLICK_RESET'
const ON_CHANGE_MAX_VALUE = 'ON_CHANGE_MAX_VALUE'
const ON_CHANGE_START_VALUE = 'ON_CHANGE_START_VALUE'
const ADD_VALUE = 'ADD_VALUE'

let initialState = {
  max: 1,
  start: 0,
  num: 0,
  active: false
}
type OnClickPlus = {
  type: 'ON_CLICK_PLUS'
}
type OnClickReset = {
  type: 'ON_CLICK_RESET'
}
type OnChangeMaxValue = {
  type: 'ON_CHANGE_MAX_VALUE'
  e: ChangeEvent<HTMLInputElement>
}
type OnChangeStartValue = {
  type: 'ON_CHANGE_START_VALUE'
  e: ChangeEvent<HTMLInputElement>
}
type AddValue = {
  type: 'ADD_VALUE'
}
type ActionType = OnClickPlus | OnClickReset | OnChangeMaxValue | OnChangeStartValue | AddValue | SetActive
type SetActive = {
  type: 'SET_ACTIVE'
  active: boolean
}
type StateType = {
  max: number
  start: number
  num: number
  active: boolean
}

export const counterReducer: Reducer<StateType, ActionType> = (state = initialState, action): StateType => {
  switch (action.type) {
    case ON_CLICK_PLUS: {
      return {...state, num: state.num + 1}
    }
    case ON_CLICK_RESET: {
      return {...state, num: state.start}
    }
    case ON_CHANGE_MAX_VALUE: {
      let newMaxValue = Number(action.e.currentTarget.value);
      return {...state, max: newMaxValue}
    }
    case ON_CHANGE_START_VALUE: {
      let newStartValue = Number(action.e.currentTarget.value);
      return {...state, start: newStartValue}
    }
    case ADD_VALUE: {
      return {...state, num: state.start}
    }
    case 'SET_ACTIVE': {
      return {...state, active: action.active}
    }
    default:
      return state;
  }
}

export const onClickPlusAC = () => {
  return {type: ON_CLICK_PLUS}
} 
export const onClickResetAC = () => {return {type: ON_CLICK_RESET}}
export const onChangeMaxValueAC = (e: ChangeEvent<HTMLInputElement>) => {return {type: ON_CHANGE_MAX_VALUE, e}}
export const onChangeStartValueAC = (e: ChangeEvent<HTMLInputElement>) => {return {type: ON_CHANGE_START_VALUE, e}}
export const addValueAC = () => {return {type: ADD_VALUE }}
export const setActiveAC = (active: boolean) => {return {type: 'SET_ACTIVE', active}}

