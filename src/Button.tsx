import React from "react";

type ButtonType ={
  title: string
  onClickChange: ()=> void
  value: boolean
}
export const Button = (props: ButtonType) => {
  return (
    <div>
      <button onClick={props.onClickChange} disabled={props.value}>{props.title}</button>
    </div>
  )
}