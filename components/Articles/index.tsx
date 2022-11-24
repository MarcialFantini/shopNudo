import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";
import urlImage from "./portada.webp";

export default function Articles() {
  return (
    <div className={styled.article}>
      <picture>
        <Image width="100" src={urlImage} alt=""></Image>
      </picture>
      <div>
        <h3>Article</h3>
        <p>The best article of the clothes</p>
      </div>
    </div>
  );
}
