import React from "react";
import btn from "../../styles/button.module.sass";
import BtnMinus from "./ButtonActions/BtnMinus";
import BtnMore from "./ButtonActions/BtnMore";
import BtnQuantity from "./ButtonActions/BtnQuantity";
import BtnAdd from "./ButtonActions/BtnAdd";
import { useContext } from "react";
import { UserContext } from "../../context/Context";

const Button = ({ id }) => {
  const { cart } = useContext(UserContext);
  let quantity = cart.map((btn) => btn.quantity);

  return (
    <section className={btn.containerBtn}>
      <BtnMinus id={id} quantity={quantity} />
      <BtnQuantity quantity={quantity} />
      <BtnMore id={id} />
      <BtnAdd id={id} />
    </section>
  );
};

export default Button;
