import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import modal from "../../styles/modal.module.sass";
import CloseBtn from "../button/ButtonActions/CloseBtn";
//  it show when empty cart shopping
const Other = () => {
  const { changeState } = useContext(UserContext);
  return (
    <>
      {changeState && (
        <div className={modal.overlay}>
          <div className={modal.container}>
            <CloseBtn />
            <div className={modal.body}>
              <hr />
              <b>Cart empty :(</b>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Other;
