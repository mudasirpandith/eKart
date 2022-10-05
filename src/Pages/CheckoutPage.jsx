import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  margin: 10px 10px 10px 35px;
  @media (max-width: 530px) {
    flex-direction: column;
  }
`;
const Images = styled.div`
  display: flex;
  margin-left: 25px;
  flex-wrap: wrap;
`;
const Image = styled.img`
  height: 70px;
  width: 70px;
  border: 1px solid;
  margin: 2px 2px 2px -20px;
  border-radius: 50%;
  display: flex;
`;
const Number = styled.p`
  display: flex;
  background-color: green;
  justify-content: center;
  height: 15px;
  width: 15px;
  font-size: 12px;
  border-radius: 50%;
  color: white;
  margin: -5px 0px 2px -15px;
`;
const Heading = styled.p`
  font-size: 20px;
  margin: 10px;
`;
const Amount = styled.span`
  font-size: 20px;
  color: green;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  margin: auto;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  display: flex;
  width: 300px;
  height: 40px;
  border: 0;
  border-bottom: 2px solid;
  border-radius: 4px;
`;
const Button = styled.button`
  height: 30px;
  width: 200px;
  border-radius: 4px;
  border: 0;
  font-weight: 600;
  font-size: 20px;
  background-color: goldenrod;
  margin: auto;
  cursor: pointer;
`;
export default function CheckoutPage() {
  const Products = JSON.parse(localStorage.getItem("cart"));
  var amount = 0;
  for (let i = 0; i < Products.length; i++) {
    amount = amount + Products[i].CartNo * Products[i].Price;
  }

  return (
    <Container>
      <Grid>
        <h1 style={{ color: "green" }}>Order Confirmation</h1>
        <Images>
          {Products.map((product, index) => {
            return (
              <React.Fragment key={index}>
                <Number>{product.CartNo}</Number>
                <Image src={product.ProductImage} />
              </React.Fragment>
            );
          })}
        </Images>

        <Heading>Total Number Of Items {Products.length}</Heading>
        <Heading>
          Total Amount to be paid :<Amount> Rs.{amount}</Amount>
        </Heading>
      </Grid>
      <Grid>
        <h1>Address</h1>
        <Form>
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder=" Address" />
          <Input type="text" placeholder="Landmark" />
          <Input type="number" placeholder="PIN Code" />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="email" placeholder="Email" />
          <Button>Pay</Button>
        </Form>
      </Grid>
    </Container>
  );
}
