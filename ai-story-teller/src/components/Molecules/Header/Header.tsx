import React, { useState } from "react";
import style from "./Header.module.scss";
import Hamburger from "@/components/Atoms/Hamburger/Hamburger";
import { Dispatch, SetStateAction } from "react";
interface HeaderProps {
  title: string;
  active: boolean;
}

function Header(props: HeaderProps) {
  const { title } = props;
  const [isActive, setIsActive] = useState(false);

  return (
    <header className={style.main}>
      <div className={style.logoContainer}>
        <img src="icons8-parchment-100.png" alt="Logo" className={style.logo} />
        <h1 className={style.title}>{title}</h1>
      </div>

      <div className={style.hamburger}>
        <Hamburger active={isActive} setActive={setIsActive} />
        {isActive && <p>The menu is open!</p>}
      </div>
    </header>
  );
}

export default Header;
