import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./InputBox.module.scss";
interface InputBoxProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function InputBox(props: InputBoxProps) {
  const { label, value, setValue } = props;

  return (
    <div className={style.main}>
      <h3>{label}</h3>

      <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
    </div>
  );
}

export default InputBox;

{
  /* <img src="icons8-medieval-62.png" /> */
}
