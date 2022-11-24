import Link from "next/link";
import React from "react";
import Articles from "../Articles";

import styled from "./styled.module.css";

export default function ListArticles() {
  return (
    <div className={styled.articles}>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>

      <div>
        <Link href="/articles">
          <h2>More articles</h2>
        </Link>
      </div>
    </div>
  );
}
