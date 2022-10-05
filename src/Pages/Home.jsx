import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductCard } from "../Components/ProductsCard/product.card";
import { data } from "../utils/data";
const Container = styled.div`
  font-family: Roboto;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;
export const Home = () => {
  return (
    <Container>
      {data.map((product) => {
        const url = `/products?product=${product.Details}&company=${product.CompanyName}&price=${product.Price}`;
        return (
          <Link style={{ textDecoration: "none" }} to={url} key={product._id}>
            <ProductCard
              ProductImage={product.ProductImage}
              CompanyName={product.CompanyName}
              Details={product.Details}
              Price={product.Price}
              OriginalPrice={product.OriginalPrice}
            />
          </Link>
        );
      })}
    </Container>
  );
};
