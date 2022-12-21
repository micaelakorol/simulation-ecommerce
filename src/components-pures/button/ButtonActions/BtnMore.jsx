import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../context/Context';
import  btn from "../../../styles/button.module.sass";
import iconPlus from "../../../images/icon-plus.svg";
//btn more
const BtnMore = ({id}) => {
    const { addToCart } = useContext(UserContext);
  return (
    <button className={btn.btn}>
    <img src={iconPlus} alt="button more" onClick={() => addToCart(id)}  className={btn.iconBtn}/>
  </button>
  )
}

export default BtnMore