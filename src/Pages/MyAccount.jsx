import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin: auto;
`;
const Image = styled.img`
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  margin: auto;
  border: red solid;
`;
const Heading = styled.h1`
  display: flex;
`;
const Text = styled.div`
  display: flex;
  margin: 10px 0;
`;
const LargeText = styled.h2`
  display: flex;
  font-size: 25px;
  font-weight: 300;
  margin: 0;
  flex: 4;
`;

const SmallText = styled.h3`
  display: flex;
  font-size: 20px;
  font-weight: 200;
  margin: 0;
  flex: 4;
`;

const EditButton = styled.button`
  background-color: #2db8f0;
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 15px;
`;
export default function MyAccount() {
  const [User, setUser] = useState([]);
  useEffect(() => {
    if (!isNaN(localStorage.getItem("User"))) setUser([]);
    else setUser(JSON.parse(localStorage.getItem("User")));
  }, []);
  console.log(User);
  return !User.name ? (
    <Container>
      <Wrapper>
        <Heading>My Account</Heading>
        <Image
          src="https://m.media-amazon.com/images/I/81v8aWVqvsL._UL1500_.jpg"
          alt="Profile"
        />

        <Text>
          <LargeText>Name :</LargeText>
          <SmallText>Mudasir Pandith</SmallText>
        </Text>
        <Text>
          <LargeText>Email :</LargeText>
          <SmallText>email@gmail.com</SmallText>
        </Text>
        <Text>
          <LargeText>Phone Number :</LargeText>
          <SmallText>+9169999999</SmallText>
        </Text>
        <Text>
          <LargeText>Address :</LargeText>
          <SmallText>Hazratbal Dargah srinagar, jammu and kashmir</SmallText>
        </Text>
        <Text>
          <LargeText>Pin Code :</LargeText>
          <SmallText>190006</SmallText>
        </Text>
        <EditButton
          onClick={() => {
            window.alert("Not Allowes Yet");
          }}
        >
          Edit Details
        </EditButton>
      </Wrapper>
    </Container>
  ) : (
    <>Logged out</>
  );
}
