import Image from "next/image";
import React from "react";

import styled from "./styled.module.css";

import people from "./people.webp";

export default function page() {
  return (
    <div className={styled.aboutContainer}>
      <picture className={styled.picture}>
        <Image className={styled.image} width="800" alt="" src={people}></Image>
      </picture>
      <div className={styled.text}>
        <h1>Hello!</h1>
        <p>We are Nudo, a clotes shop </p>
      </div>
    </div>
  );
}
