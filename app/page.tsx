import React from "react";

import Header from "../components/Header";
import ListArticles from "../components/ListArticles";
import ProductsHome from "../components/ProductsHome";
import ShowProducts from "../components/ShowProducts";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <ProductsHome></ProductsHome>
      <ShowProducts></ShowProducts>
      <ListArticles></ListArticles>
    </div>
  );
}
