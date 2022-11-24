import Link from "next/link";
import React from "react";

import styled from "./styled.module.css";

export default function Navbar() {
  return (
    <div className={styled.navbar}>
      <h2 className={styled.title}>Nudo</h2>
      <ul className={styled.list}>
        <Link href="/" className={styled.link}>
          Home
        </Link>
        <Link href="/articles" className={styled.link}>
          Articles
        </Link>

        <Link href="/about" className={styled.link}>
          About
        </Link>
        <Link href="/products" className={styled.link}>
          Products
        </Link>
      </ul>
    </div>
  );
}
