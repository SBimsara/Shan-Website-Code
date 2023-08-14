import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #fff;
  /* border-radius: 8px; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  margin: 10px;
  max-width: 300px;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Details = styled.div`
  padding: 10px;
  color: #fff;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;

const Description = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #777;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductCard = ({ imageSrc, productName, price, description }) => {
  return (
    <Card>
      <Image src={imageSrc} alt={productName} />
      <Details>
        <h2>{productName}</h2>
        <Price>${price}</Price>
        <Description>{description}</Description>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </Details>
    </Card>
  );
};

export default ProductCard;
