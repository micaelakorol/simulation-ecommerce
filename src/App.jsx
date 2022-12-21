/* eslint-disable no-undef */
import React from "react";
import CarruselImages from "./components-pures/carrusel/CarruselImages";
import DescriptionProduct from "./components-pures/products/DescriptionProduct";
import Modal from "./components-pures/modal/Modal";
import Nav from "./components-pures/nav/Nav";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Nav />
      <CarruselImages />
      <Modal/>
      <DescriptionProduct />
    </>
  );
};
export default App;
