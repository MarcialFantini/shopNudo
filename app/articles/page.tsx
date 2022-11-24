import React from "react";
import Articles from "../../components/Articles";
import styled from "./styled.module.css";

export default function ArticlesHome() {
  return (
    <div>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>
      <Articles></Articles>
      <div className={styled.line}></div>
    </div>
  );
}
