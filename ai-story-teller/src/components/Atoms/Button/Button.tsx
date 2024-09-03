import React from "react";
import style from "./Button.module.scss";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled: boolean;
}

export default function Button(props: ButtonProps) {
  const { label, onClick, disabled } = props;

  return (
    <button className={style.main} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  );
}
