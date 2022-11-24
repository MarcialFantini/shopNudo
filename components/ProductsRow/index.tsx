import React from "react";
import Card from "../Card";

import styled from "./styled.module.css";

import product1 from "../ProductsHome/product1.jpg";
import product2 from "../ProductsHome/product2.webp";
import product3 from "../ProductsHome/product3.png";
import product4 from "../ProductsHome/product4.jpg";

export default function ProductsRow() {
  return (
    <div className={styled.products}>
      <Card srcUrl={product1}></Card>
      <Card srcUrl={product2}></Card>
      <Card srcUrl={product3}></Card>
      <Card srcUrl={product4}></Card>
    </div>
  );
}
