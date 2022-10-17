import React, { useState } from "react";
import { useEffect } from "react";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 5px;
`;
const Card = styled.div`
  display: flex;
  color: black;
  border: 0.1px solid grey;
  border-radius: 10px;
  padding: 10px;
  width: 300px;
  height: 120px;
  margin: auto;
`;
const Heading = styled.h1`
  width: 94%;
  display: flex;
  position: sticky;
  top: 0;
  margin: 0;
  justify-content: center;
  padding: 3%;
  background-color: goldenrod;
  text-align: center;
`;

const ImagePart = styled.div`
  margin: auto;
  display: flex;
  flex: 2;
`;
const Image = styled.img`
  width: 90px;
  height: 100%;
`;
const TextPart = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  text-align: center;
`;
const CompanyName = styled.h3`
  margin: 5px auto;
  display: flex;
`;
const Details = styled.h3`
  margin: 1px auto;
  display: flex;
  font-weight: 400;
  font-size: 15px;
`;

const Price = styled.p`
  display: flex;
  margin: 2px auto;
  color: green;
`;

const Span = styled.span`
  display: flex;
  font-size: 20px;
`;
const NumberBox = styled.div`
  display: flex;
  gap: 1px;
`;
const Button = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  font-size: 20px;
  margin: 0 -20px;
  font-weight: 600;
  cursor: pointer;
  margin: 3px auto;
`;
const Number = styled.h3`
  display: flex;
  margin: 3px auto;
`;
const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const EmptyCartImage = styled.img`
  width: 100%;
`;
const CheckoutBox = styled.div`
  display: flex;
  position: sticky;
  bottom: 0;
  padding: 20px 0;
  justify-content: center;
  width: 100%;
  background-color: goldenrod;
`;
const CheckOutButton = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
const Input = styled.input`
  background-size: cover;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0TrgdZiSP7-zwQs3-L-2mGqOPs0941NsLQ&usqp=CAU");
  border: 0;
  width: 20px;
  height: 20px;
  margin-top: 4px;
  cursor: pointer;
  padding: 2px;
`;
export default function Cart() {
  const [amount, setAmount] = useState(0);
  const [Products, setProducts] = useState([]);

  const [isEmpty, setEmpty] = useState(false);
  useEffect(() => {
    if (!isNaN(localStorage.getItem("cart"))) setEmpty(true);
    else if (JSON.parse(localStorage.getItem("cart")).length === 0)
      setEmpty(true);
    if (!isEmpty) {
      setProducts(JSON.parse(localStorage.getItem("cart")));
    }
  }, []);

  function getAmount() {
    var amo = 0;
    for (var i = 0; i < Products.length; i++) {
      amo = amo + Products[i].CartNo * Products[i].Price;
    }
    setAmount(amo);
  }

  function handleDelete(e) {
    const key = e.target.name;
    const IndexOfItem = Products.findIndex((found) => found._id === key);
    let RestItems = [
      ...Products.slice(0, IndexOfItem),
      ...Products.slice(IndexOfItem + 1),
    ];

    if (JSON.parse(localStorage.getItem("cart")).length === 1) {
      localStorage.setItem("cart", JSON.stringify(RestItems));
      setEmpty(true);
    } else {
      localStorage.setItem("cart", JSON.stringify(RestItems));
      setProducts(JSON.parse(localStorage.getItem("cart")));
      getAmount();
    }
  }

  function handleIncrease(e) {
    const key = e.target.name;
    const IndexOfItem = Products.findIndex((found) => found._id === key);
    Products[IndexOfItem].CartNo = Products[IndexOfItem].CartNo + 1;
    localStorage.setItem("cart", JSON.stringify(Products));
    setProducts(JSON.parse(localStorage.getItem("cart")));
    getAmount();
  }
  function handleDecrease(e) {
    const key = e.target.name;
    const IndexOfItem = Products.findIndex((found) => found._id === key);

    if (Products[IndexOfItem].CartNo === 1) {
      let RestItems = [
        ...Products.slice(0, IndexOfItem),
        ...Products.slice(IndexOfItem + 1),
      ];

      if (JSON.parse(localStorage.getItem("cart")).length === 1) {
        localStorage.setItem("cart", JSON.stringify(RestItems));
        setEmpty(true);
      } else {
        localStorage.setItem("cart", JSON.stringify(RestItems));
        setProducts(JSON.parse(localStorage.getItem("cart")));
        getAmount();
      }
    } else {
      Products[IndexOfItem].CartNo = Products[IndexOfItem].CartNo - 1;
      localStorage.setItem("cart", JSON.stringify(Products));
      setProducts(JSON.parse(localStorage.getItem("cart")));
      getAmount();
    }
  }
  return !isEmpty ? (
    <Container>
      <Heading>Cart</Heading>
      {Products.slice()
        .reverse()
        .map((product, index) => {
          return (
            <React.Fragment key={index}>
              <Card>
                <ImagePart>
                  <Image src={product.ProductImage} />
                </ImagePart>
                <TextPart>
                  <CompanyName> {product.CompanyName}</CompanyName>
                  <Details>{product.Details.slice(0, 30)}</Details>

                  <Price>
                    <Span>₹</Span>
                    {product.Price}
                  </Price>
                  <NumberBox>
                    <Button
                      name={product._id}
                      onClick={handleDecrease}
                      title="Order less number of items"
                    >
                      -
                    </Button>
                    <Number>{product.CartNo}</Number>
                    <Button
                      name={product._id}
                      onClick={handleIncrease}
                      title="Order more number of items"
                    >
                      +
                    </Button>
                    <Input
                      title="Remove from Cart"
                      type="button"
                      name={product._id}
                      value=""
                      onClick={handleDelete}
                    />
                  </NumberBox>
                </TextPart>
              </Card>
            </React.Fragment>
          );
        })}
      <CheckoutBox>
        <a
          href={`checkout?access=True&accessid=skjdsjkdbsjkdbjsfvsyudgjehv&userid =${amount}&token=edhesdfkjsshdbsekjrbwjhwkhbejhvdhjwvdjwvdjsvdjsyfwvd`}
        >
          <CheckOutButton>Proceed and Pay Rs. {amount}</CheckOutButton>
        </a>{" "}
      </CheckoutBox>
    </Container>
  ) : (
    <>
      <EmptyCart>
        <Heading>Cart</Heading>
        <EmptyCartImage src="https://shop.millenniumbooksource.com/static/images/cart1.png" />
      </EmptyCart>
    </>
  );
}
