/* eslint-disable no-undef */
import { Carousel } from "react-bootstrap";
import React from "react";
import style from '../../styles/productPrincipal.module.sass'
//carousel the images
const CarruselImages = () => {
  return (
      <section className={style.carousel}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../../images/image-product-1.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../../images/image-product-2.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../../images/image-product-3.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block"
              src={require("../../images/image-product-4.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
        </Carousel>
      </section>
  );
};

export default CarruselImages;
