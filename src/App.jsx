/* eslint-disable no-undef */
import React from "react";
import Modal from "./components/modal/Modal";
import Nav from "./components/nav/Nav";
import ProductPrincipal from "./components/productPrincipal/ProductPrincipal";
const App = () => {
  return (
    <>
      <Nav />
      <Modal/>
      <ProductPrincipal />
    </>
  );
};
export default App;
