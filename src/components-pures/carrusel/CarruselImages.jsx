/* eslint-disable no-undef */
import { Carousel } from "react-bootstrap";
import React from "react";
import styles from '../../styles/carousel.module.sass'
//carousel the images
const CarruselImages = () => {
  return (
    <>
      <div className={styles.carousel} role='img'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../images/image-product-1.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../images/image-product-2.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../images/image-product-3.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../../images/image-product-4.jpg")}
              alt="product shoe"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarruselImages;
