export const loadState = () => {
  try {
    const startValue = localStorage.getItem('startValue');
    const maxValue = localStorage.getItem('maxCounterValue');
    if (startValue === null | maxValue === null) {
      return undefined;
    }
    return JSON.parse(startValue) & JSON.parse(maxValue);
  } catch (err) {
    return undefined;
  }
}; 
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('maxCounterValue', serializedState);
    localStorage.setItem('startValue', serializedState);

  } catch {
    // ignore write errors
  }
};