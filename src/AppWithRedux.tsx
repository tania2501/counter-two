import React, { ChangeEvent} from "react";
import "./App.css";
import { Counter } from "./Counter";
import { CounterSettings } from "./CounterSettings";
import { useDispatch, useSelector } from "react-redux";
import { AppRootState } from "./store-redux/store";
import { addValueAC, onChangeMaxValueAC, onChangeStartValueAC, onClickPlusAC, onClickResetAC, setActiveAC} from "./store-redux/counter-reducer";

function AppWithRedux() {

  const dispatch = useDispatch()

  const num = useSelector<AppRootState, number>((state)=> state.num)
  const max = useSelector<AppRootState, number>((state)=> state.max)
  const start = useSelector<AppRootState, number>((state)=> state.start)
  const active  = useSelector<AppRootState, boolean>((state)=> state.active)

  const onClickPlus = () => {
    dispatch(onClickPlusAC())
  };
  const onClickReset = () => {
    dispatch(onClickResetAC())
  };

  const disabledValue = start < 0 || max < 0 || start > max || start === max;
  
  const onChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeMaxValueAC(e))
  };
  const onChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(onChangeStartValueAC(e))
  };

  const addValue = () => {
    dispatch(addValueAC())
    dispatch(setActiveAC(!active))
  };
  const displayNone = () => {
    dispatch(setActiveAC(!active))
  }
  return (
    <div className="App">
      <CounterSettings
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
        active={active}
        setActive={displayNone}
      />
    </div>
  );
}

export default AppWithRedux;
