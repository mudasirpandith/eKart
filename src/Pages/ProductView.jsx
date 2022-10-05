import { ShoppingBasket } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { data } from "../utils/data";
import { ReviewBox } from "../utils/reviewBox";
import MuiAlert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert ref={ref} variant="filled" {...props} />;
});
const Container = styled.div`
  display: flex;

  @media only screen and (max-width: 530px) {
    flex-direction: column;
  }
`;
const ImagePart = styled.div`
  display: flex;
  justify-content: center;
  flex: 3;
`;
const TextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 4;
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;

const Image = styled.img`
  width: 300px;
  height: 100%;
  @media (max-width: 500px) {
    height: 300px;
    width: auto;
  }
`;

const CompanyName = styled.h3`
  margin: 8px auto;
  display: flex;
`;
const Details = styled.h3`
  margin: 3px auto;
  display: flex;
  font-weight: 400;
  font-size: 18px;
`;
const Rating = styled.div`
  margin: 10px auto;
  display: flex;
`;
const PriceCol = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 auto;
`;
const Price = styled.p`
  display: flex;
  font-size: 35px;
  font-weight: 300;
  margin: 0 auto;
`;
const OriginalPrice = styled.p`
  display: flex;
  font-size: 20px;
  margin: 10px auto;
  text-decoration: line-through;
  font-weight: 200;
  color: red;
`;
const Discount = styled.p`
  display: flex;
  font-size: 16px;

  font-weight: 100;
  margin: 8px auto;
`;

const Span = styled.span`
  font-size: 20px;
`;

const Button = styled.button`
  margin: 8px auto;
  width: 200px;
  height: 30px;
  cursor: pointer;
  background-color: #f7ca00;

  border-radius: 10px;
  border: 0;
`;
export const ProductView = () => {
  var kart = [];
  const [AlertBox, setAlertBox] = useState({
    status: false,
    message: "",
    color: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertBox({ status: false });
  };
  function handleCart() {
    var isCartEmpty = !isNaN(localStorage.getItem("cart"));
    if (isCartEmpty) {
      kart.push(product);

      localStorage.setItem("cart", JSON.stringify(kart));

      setAlertBox({
        status: true,
        message: "Product Added to cart",
        color: "success",
      });
    } else {
      kart = JSON.parse(localStorage.getItem("cart"));
      const Check = kart.find((found) => found.Details === product.Details);

      if (Check) {
        const IndexOfItem = kart.findIndex(
          (found) => found._id === product._id
        );
        kart[IndexOfItem].CartNo = kart[IndexOfItem].CartNo + 1;
        localStorage.setItem("cart", JSON.stringify(kart));
        setAlertBox({
          status: true,
          message: "Product Already in Cart",
          color: "info",
        });
      } else {
        kart.push(product);
        localStorage.setItem("cart", JSON.stringify(kart));
        setAlertBox({
          status: true,
          message: "Added to cart",
          color: "success",
        });
      }
    }
  }
  const queryParams = new URLSearchParams(window.location.search);
  const term = queryParams.get("product");
  const product = data.find((prod) => prod.Details === term);
  document.title = product.Details;
  return (
    <>
      <Container>
        <ImagePart>
          <Image src={product.ProductImage} />
        </ImagePart>
        <TextPart>
          <CompanyName>{product.CompanyName}</CompanyName>
          <Details>{product.Details} </Details>
          <Rating>⭐⭐⭐⭐</Rating>
          <PriceCol>
            <Price>
              <Span>₹</Span>
              {product.Price}
            </Price>
            <OriginalPrice>₹{product.OriginalPrice}</OriginalPrice>
            <Discount>
              (
              {(
                (product.OriginalPrice - product.Price) /
                product.OriginalPrice
              ).toPrecision(2) * 100}
              % OFF)
            </Discount>
          </PriceCol>
          <Button title="Add product to cart" onClick={handleCart}>
            <ShoppingBasket />{" "}
          </Button>
        </TextPart>
      </Container>

      <ReviewBox reviewData={product.Reviews} />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={AlertBox.status}
          autoHideDuration={2000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={AlertBox.color}
            sx={{ width: "100%" }}
          >
            {AlertBox.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};
