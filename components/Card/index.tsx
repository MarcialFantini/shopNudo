import Image, { StaticImageData } from "next/image";
import React from "react";

import styled from "./styled.module.css";

interface props {
  srcUrl: StaticImageData;
}

export default function Card(props: props) {
  return (
    <div className={styled.card}>
      <picture className={styled.picture}>
        <Image className={styled.img} src={props.srcUrl} alt=""></Image>
      </picture>
      <h3>Product</h3>
      <p>Price: $23</p>
    </div>
  );
}
