import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './counter-reducer';


export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: counterReducer,
});

//@ts-ignore
window.store = store;