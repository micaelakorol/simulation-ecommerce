import React from "react";
import { useContext } from "react";
import { UserContext } from "../../../context/Context";
//import "../../../styles/modal.css";
import modal from '../../../styles/modal.module.sass'
import close from '../../../images/icon-close.svg'
//function close modal cart
const CloseBtn = () => {
  const { changeState, setChangeState } = useContext(UserContext);
  return (
    <>
      <button
        className={modal.btnClose}
        onClick={() => setChangeState(!changeState)}
      >
        <img src={close} alt="button close" />
      </button>
    </>
  );
};

export default CloseBtn;
