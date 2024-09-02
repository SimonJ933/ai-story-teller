import React from "react";
import style from "./Header.module.scss";
import Button from "../Atoms/Button";

interface HeaderProps {
  title: string;
}

function Header(props: HeaderProps) {
  const { title } = props;
  return (
    <div className={style.main}>
      <div className={style.logo}>
        <img src="icons8-scroll-64.png" />
      </div>
      <h1 className={style.title}>{title}</h1>
      <Button label="Login" />
    </div>
  );
}

export default Header;
