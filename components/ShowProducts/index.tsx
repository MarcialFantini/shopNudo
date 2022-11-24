import React from "react";
import CardMini from "../CardMini";
import Image from "next/image";

import styled from "./styled.module.css";

import imgUrl from "./model1.jpg";

import product1 from "./product1.jpg";
import product2 from "./product2.webp";
import product3 from "./product3.png";
import product4 from "./product4.jpg";

export default function ShowProducts() {
  return (
    <div className={styled.grid}>
      <picture className={styled.picture}>
        <Image className={styled.img} alt="" src={imgUrl}></Image>
      </picture>
      <div className={styled.miniCards}>
        <CardMini srcUrl={product1}></CardMini>
        <CardMini srcUrl={product2}></CardMini>
        <CardMini srcUrl={product3}></CardMini>
        <CardMini srcUrl={product4}></CardMini>
      </div>
    </div>
  );
}
