import AllButtons from "../button/AllButtons";
import React, { useContext } from "react";
//import "../../styles/descriptionProducts.css";
import styles from '../../styles/descriptionProducts.module.sass'
import { UserContext } from "../../context/Context";
import CarruselImages from "./CarruselImages";
import style from '../../styles/productPrincipal.module.sass'

const ProductItem = () => {
  const { addToCart, delFromCart, products } = useContext(UserContext);

  return (
    // Description of  product of carousel
    <>
      <section className={styles.carouselContainer}>
        <div className={styles.descriptionProduct}>
          <div className={styles.titleProduct}>
            <b> SNEAKER COMPANY</b>
          </div>
 {/* description */}
          {products.map((item) => (
            <>
              <section className={styles.subtitle}>
                <h1>{item.title}</h1>
              </section>
               {/* prices */}
              <div className={styles.infoProduct}>{item.description}</div>

              <div className={styles.prices}>
                <section className={styles.sectionPrice}>
                  <p className={styles.price}>${item.price}.00</p>
                  <p className={styles.withDiscount}>{item.desc}%</p>
                </section>

                <div className={styles.pricePrev}>
                  <p> ${item.priceOrig}.00</p>
                </div>
                 {/* component where are all the buttons */}
                <AllButtons
                  addToCart={addToCart}
                  id={item.id}
                  delFromCart={delFromCart}
                />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductItem;
