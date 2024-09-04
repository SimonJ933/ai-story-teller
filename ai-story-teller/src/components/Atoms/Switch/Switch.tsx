import React from "react";
import style from "./Switch.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

interface SwitchProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Switch = (props: SwitchProps) => {
  const { active, setActive } = props;

  return (
    <div>
      <div className={`${style.main} ${active ? style.active : ""}`} onClick={() => setActive(!active)}>
        <div className={`${style.mask}  ${active ? style.active : ""}`} />
        <div className={`${style.dot} ${active ? style.active : ""}`} />
      </div>

      <span className={style.label}>{active ? "Adults Only" : "Kids Only"}</span>
    </div>
  );
};

export default Switch;
