import React from "react";
import style from "./WindowBox.module.scss";
interface WindowBoxProps {
  title?: string;
}
function WindowBox(props: WindowBoxProps) {
  const { title } = props;

  return <div className={style.main}>{title && <h4>{title}</h4>}</div>;
}

export default WindowBox;
