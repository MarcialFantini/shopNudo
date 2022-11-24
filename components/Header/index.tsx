import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "./styled.module.css";

import urlImage from "./portada.jpg";

export default function Header() {
  return (
    <header className={styled.header}>
      <div className={styled.textContainer}>
        <h1 className={styled.title}>Fragancias para usted</h1>
        <Link href="/products">{"Ver mas ->"}</Link>
      </div>
      <picture className={styled.picture}>
        <Image className={styled.img} src={urlImage} alt="hola" />
      </picture>
    </header>
  );
}
