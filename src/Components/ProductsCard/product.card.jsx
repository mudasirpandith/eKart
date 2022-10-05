import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  color: black;
  cursor: pointer;
  border: 0.1px solid grey;
  border-radius: 10px;
  padding: 10px;
  width: 150px;
  height: 300px;
  justify-content: center;
  flex-direction: column;
  @media only screen and (min-width: 300px) {
    width: 150px;
  }
  @media only screen and (min-width: 530px) {
    width: 190px;
  }
`;
const ImagePart = styled.div`
  margin: auto;
  display: flex;
  flex: 3;
`;
const Image = styled.img`
  height: 130px;
  @media only screen and (max-width: 530px) {
    width: 100px;
    height: 100px;
    margin-top: 20px;
  }
`;
const TextPart = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  text-align: center;
`;
const CompanyName = styled.h3`
  margin: 8px auto;
  display: flex;
  @media only screen and (max-width: 530px) {
  }
`;
const Details = styled.h3`
  margin: 3px auto;
  display: flex;
  font-weight: 400;
  font-size: 18px;
  @media only screen and (max-width: 530px) {
    font-size: 15px;
  }
`;
const Rating = styled.div`
  margin: 5px auto;
  display: flex;
`;
const PriceCol = styled.div`
  display: flex;
  justify-content: center;
  gap: 1px;
  margin: 2px 0;
`;
const Price = styled.p`
  display: flex;
  font-size: 25px;
  font-weight: 300;
  margin: 1px 0;
  @media only screen and (max-width: 530px) {
    font-size: 20px;
  }
`;
const OriginalPrice = styled.p`
  display: flex;
  font-size: 15px;
  text-decoration: line-through;
  margin: 5px 0;
  font-weight: 200;
  color: red;
  @media only screen and (max-width: 530px) {
  }
`;
const Discount = styled.p`
  display: flex;
  font-size: 10px;
  font-weight: 100;

  @media only screen and (max-width: 530px) {
    font-size: 10px;
  }
`;
const FreeDelivery = styled.p`
  display: flex;
  font-size: 10px;
  font-weight: 100;
  margin: 0px auto;
`;
const Span = styled.span`
  font-size: 15px;
`;
export const ProductCard = (props) => {
  return (
    <Container>
      <ImagePart>
        <Image src={props.ProductImage} />
      </ImagePart>
      <TextPart>
        <CompanyName> {props.CompanyName.slice(0, 15)}</CompanyName>
        <Details> {props.Details.slice(0, 20)}</Details>
        <Rating>⭐⭐⭐⭐</Rating>
        <PriceCol>
          <Price>
            <Span>₹</Span>
            {props.Price}
          </Price>
          <OriginalPrice>₹{props.OriginalPrice}</OriginalPrice>
          <Discount>
            (
            {(
              (props.OriginalPrice - props.Price) /
              props.OriginalPrice
            ).toPrecision(2) * 100}
            % OFF)
          </Discount>
        </PriceCol>
        <FreeDelivery>FREE DELIVERY BY KCART</FreeDelivery>
      </TextPart>
    </Container>
  );
};
