import React from "react";
import { homeObjOne } from "../Home/Data";
import { InfoSection } from "../../components";
import { PageTitle, PageTitleHead, ProductPage } from "./Products.elements";
import ProductCard from "../../components/Products/ProductCard";

const Products = () => {
  return (
    <>
      <ProductPage>
        <PageTitle>
          OUR <PageTitleHead> PRODUCTS</PageTitleHead>
        </PageTitle>

        <ProductCard
          imageSrc="1.jpeg"
          productName="Product 2"
          price="149.99"
          description=""
        ></ProductCard>
      </ProductPage>
    </>
  );
};

export default Products;
