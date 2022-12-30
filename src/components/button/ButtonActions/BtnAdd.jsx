import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import  btn from "../../../styles/button.module.sass";

const BtnAdd = ({ id }) => {
  const { addToCart } = useContext(UserContext);
  return (
    <div className={btn.btnAdd}>
      <button
        type="submit"
        className={btn.addStyle}
        onClick={() => addToCart(id)}
      > Add to cart
      </button>
    </div>
  );
};

export default BtnAdd;
