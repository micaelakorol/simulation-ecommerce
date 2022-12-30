import React from "react";
import { useContext } from "react";
import btn from "../../../styles/button.module.sass";
import { UserContext } from "../../../context/Context";

const BtnQuantity = ({ quantity }) => {
  const { cart } = useContext(UserContext);
  return (
    <button className={btn.quantity} defaultValue={0}>
      {cart.map((item) => (
        <b key={item.id}>{item.quantity > 1 ? item.quantity : quantity}</b>
      ))}
    </button>
  );
};

export default BtnQuantity;
