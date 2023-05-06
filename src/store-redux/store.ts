import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter-reducer';
import { loadState, saveState } from './localstorage';


export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: counterReducer, 
  preloadedState: loadState()
});
store.subscribe(() => {
  saveState({
    max: store.getState().max,
    start: store.getState().start,
    num: store.getState().num,
    active: store.getState().active,
  });
});
//@ts-ignore
window.store = store;