import React, { Dispatch, SetStateAction, useState } from "react";
import style from "./Hamburger.module.scss";

interface HamburgerProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

function Hamburger({ active, setActive }: HamburgerProps) {
  return (
    <div className={`${style.main} ${active ? style.active : ""}`} onClick={() => setActive(!active)}>
      <div className={style.breadUp}></div>
      <div className={style.hamb}></div>
      <div className={style.breadDown}></div>
    </div>
  );
}

export default Hamburger;
