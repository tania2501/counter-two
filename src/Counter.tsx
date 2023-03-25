import React from "react";
import { Button } from "./Button";

type CounterType = {
  maxValue: number;
  value: number;
  onClickPlus: () => void;
  onClickReset: () => void;
  disabled: boolean;
  setActive: ()=>void
  active: boolean
};

export const Counter = (props: CounterType) => {
  return (
    <div className={props.active ? 'main' : 'settings'}>
      <div className="numBlock">
        <h3 className={props.value === props.maxValue ? 'red' : ''}>{props.value}</h3>
      </div>
      <div className="buttons">
        <Button
          title={"inc"}
          onClickChange={props.onClickPlus}
          value={props.value === props.maxValue}
        />
        <Button
          title={"reset"}
          onClickChange={props.onClickReset}
          value={props.value === 0}
        />
        <Button
          title={"set"}
          onClickChange={props.setActive}
          value={false}
        />
      </div>
    </div>
  );
};
