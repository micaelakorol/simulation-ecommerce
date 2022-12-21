import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import btn from "../../../styles/button.module.sass";
import iconMinus from "../../../images/icon-minus.svg";
//btn minus
const BtnMinus = ({ id, quantity }) => {
  const { delFromCart } = useContext(UserContext);

  return (
    <button
      className={btn.btn}
      onClick={() => delFromCart(id)}
      disabled={quantity < 1}
    >
      <img src={iconMinus} alt="button decrease" className={btn.iconBtn} />
    </button>
  );
};

export default BtnMinus;
