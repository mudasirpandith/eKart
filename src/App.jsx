import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckoutPage from "./Pages/CheckoutPage";

import { Home } from "./Pages/Home";
import { ProductView } from "./Pages/ProductView";
import Cart from "./utils/Cart";

export default function App() {
  return (
    <>
      {" "}
     
      <BrowserRouter>
       <Cart />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<ProductView />} />
            <Route path="*" element={<Home />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
