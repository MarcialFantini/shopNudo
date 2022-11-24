import Link from "next/link";
import React from "react";
import Card from "../Card";

import styled from "./styled.module.css";

import product1 from "./product1.jpg";
import product2 from "./product2.webp";
import product3 from "./product3.png";
import product4 from "./product4.jpg";

export default function ProductsHome() {
  return (
    <div className={styled.listProducts}>
      <div className={styled.titles}>
        <h1>Products:</h1>
        <Link href="/products">More products</Link>
      </div>
      <div className={styled.products}>
        <Card srcUrl={product1}></Card>
        <Card srcUrl={product2}></Card>
        <Card srcUrl={product3}></Card>
        <Card srcUrl={product4}></Card>
      </div>
    </div>
  );
}
