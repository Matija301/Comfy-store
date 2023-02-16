import React from "react";
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import { useUserContext } from "./context/user_context";
import AuthWrapper from "./pages/AuthWrapper";
import {
  Home,
  Products,
  SingleProductsPage,
  About,
  Cart,
  Error,
  Checkout,
  Private,
} from "./pages/index";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  const { myUser } = useUserContext();
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products/:id" element={<SingleProductsPage />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
