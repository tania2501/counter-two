import { AppRootState } from "./store";

export const loadState = () => {
  try {
    const start = localStorage.getItem('startValue');
    const max = localStorage.getItem('maxCounterValue');
    if (start === null || max === null) {
      return undefined;
    }
    return {max: JSON.parse(max), start: JSON.parse(start), num: JSON.parse(start), active: false};
  } catch (err) {
    return undefined;
  }
}; 
export const saveState = (state: AppRootState) => {
  try {
    const max = JSON.stringify(state.max);
    const start = JSON.stringify(state.start)
    localStorage.setItem('maxCounterValue', max);
    localStorage.setItem('startValue', start);

  } catch {
    // ignore write errors
  }
};