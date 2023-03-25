import React, { ChangeEvent, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterSettings } from "./CounterSettings";

function App() {
  const onClickPlus = () => {
    const numPlus = num + 1;
    setNum(numPlus);
  };
  const getFromLS1 = ():number => {
      const getMaxValue = localStorage.getItem("maxCounterValue");
      if(getMaxValue) {
        return JSON.parse(getMaxValue)
      } else return 0
    }
    const getFromLS2 = ():number => {
      const startNum = localStorage.getItem("startValue");
      if(startNum) {
        return JSON.parse(startNum)
      } else return 0
    }
  const [max, setMax] = useState<number>(getFromLS1);
  const [start, setStart] = useState<number>(getFromLS2);
  const [num, setNum] = useState(start);
  const [active, setActive] = useState<boolean>(false);

  const onClickReset = () => {
    setNum(start);
  };
  const displayNone = () => {
    setActive(!active)
  }
  const disabledValue = start < 0 || max < 0 || start > max || start === max;
   
  
  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newMaxValue = Number(e.currentTarget.value);
    setMax(newMaxValue);
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    let newStartValue = Number(e.currentTarget.value);
    setStart(newStartValue);
  };
  
  const addValue = () => {
    localStorage.setItem("maxCounterValue", JSON.stringify(max));
    localStorage.setItem("startValue", JSON.stringify(start));
    const getMaxValue = localStorage.getItem("maxCounterValue");
    setMax(Number(getMaxValue));
    let startNum = localStorage.getItem("startValue");
    setNum(Number(startNum));
    setActive(!active)
  };
  return (
    <div className="App">
      <CounterSettings
        setNum={setNum}
        maxValue={max}
        startValue={start}
        onChangeMaxValue={onChangeMaxValue}
        onChangeStartValue={onChangeStartValue}
        addValue={addValue}
        disabled={disabledValue}
        active={active}
      />
      <Counter
        maxValue={max}
        value={num}
        onClickPlus={onClickPlus}
        onClickReset={onClickReset}
        disabled={disabledValue}
        setActive={displayNone}
        active={active}
      />
    </div>
  );
}

export default App;
