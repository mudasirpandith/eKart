import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Cart from "../Components/Cart/Cart";
import styled from "styled-components";
import Badge from "@mui/material/Badge";
import {
  AccountCircleOutlined,
  ArrowBack,
  ShoppingBagOutlined,
} from "@mui/icons-material";
const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
`;
const Nav = styled.div`
  display: flex;
  background-color: goldenrod;
  position: sticky;

  padding: 20px;
  flex: 6;
`;
const Branding = styled.div`
  display: flex;
  flex: 2;
`;
const Icons = styled.div`
  display: flex;
  gap: 10px;
`;
const Heading = styled.h2`
  display: flex;
  margin: 0;
`;
const Button = styled.button`
  display: flex;
  margin-bottom: -40px;
  position: absolute;
  z-index: 1;
  background-color: transparent;
  font-size: 20px;
  border: none;
  cursor: pointer;
`;
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  const [Number, setNumber] = useState(0);
  function getNumber() {
    if (!isNaN(localStorage.getItem("cart"))) {
      setNumber(0);
    } else if (JSON.parse(localStorage.getItem("cart")).length === 0)
      setNumber(0);
    else {
      setNumber(JSON.parse(localStorage.getItem("cart")).length);
    }
  }
  setInterval(getNumber, 1000);

  return (
    <Container>
      <React.Fragment key="right">
        <SwipeableDrawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          <Box
            sx={{
              width: window.innerWidth > 500 ? "600px" : window.innerWidth,
            }}
            role="presentation"
          >
            <Button onClick={toggleDrawer("right", false)}>
              {" "}
              <ArrowBack fontSize="large" />
            </Button>

            <Cart />
          </Box>
        </SwipeableDrawer>
      </React.Fragment>

      <Nav>
        <Branding>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Heading>Ekart</Heading>
          </Link>
        </Branding>
        <Icons>
          <Link
            to="/account"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            {" "}
            <AccountCircleOutlined fontSize="large" />{" "}
          </Link>

          <Badge
            badgeContent={Number}
            color="primary"
            onClick={toggleDrawer("right", true)}
          >
            <ShoppingBagOutlined fontSize="large" />
          </Badge>
        </Icons>
      </Nav>
    </Container>
  );
}
