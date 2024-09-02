import React from "react";
import style from "./Button.module.scss";
interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { label, onClick } = props;

  return (
    <button className={style.main} onClick={onClick}>
      {label}
    </button>
  );
}
