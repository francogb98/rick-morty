import React from "react";
import style from "./about.module.css";

export default function About() {
  return (
    <>
      <div className={style.container}>
        <h1>About Me</h1>
        <h2>Nombre: Franco Baudino</h2>
        <h2>Conocimientos:</h2>
        <ul className={style.li}>
          <li>HTML 5</li>
          <li>CSS 3</li>
          <li>JAVASCRIPT</li>
          <li>BOOSTRAP</li>
          <li>LESS</li>
          <li>JQUERY</li>
          <li>MYSQL</li>
          <li>POSGRESQL</li>
          <li>MONGODB</li>
          <li>REACT</li>
          <li>NODE JS</li>
          <li>EXPRESS</li>
        </ul>
      </div>
    </>
  );
}
