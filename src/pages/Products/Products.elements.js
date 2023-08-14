import styled from "styled-components";

const primaryColor = "#000";
const secondaryColor = "#fff";
const ternaryColor = "#ef2d56";

export const ProductPage = styled.div`
  background-color: #000;
  /* display: flex; */
  /* justify-content: space-between; */
  padding: 20px;
`;

export const ProductHeader = styled.div`
  background-color: #000;
  font-size: 24px;
  padding: 20px;
`;

export const PageTitle = styled.div`
  color: #fff;
  font-size: 39px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const PageTitleHead = styled.div`
  color: ${ternaryColor};
  margin-left: 19px;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;
