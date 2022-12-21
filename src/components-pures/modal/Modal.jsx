import React, { useContext } from "react";
import { UserContext } from "../../context/Context";
//import "../../styles/modal.css";
import modal from '../../styles/modal.module.sass'
import CloseBtn from "../button/ButtonActions/CloseBtn";
import Delete from "../button/ButtonActions/Delete";
import EmptyCart from "./EmptyCart";
import Button from 'react-bootstrap/Button';

const Modal = () => {
  const { changeState, clearCart, cart } = useContext(UserContext);

  return (
    //summary of cart shopping
    <>
      {cart.length && changeState ? (
        <div className={modal.overlay}>
          <div className={modal.container}>
            {cart.map((item) => (
              <>
                <header className={modal.modalHead} key={item.id}>
                  <h3 className={modal.titleModal}>Cart</h3>
                </header>
                <CloseBtn />
                {/* body of cart shopping */}
                <div className={modal.body}>
                  <p> {item.title} </p>
                  <b>
                    {item.quantity} x 
                   $ {item.price * item.quantity}.00
                  </b>
                  <Delete id={item.id} />
                  <div className={modal.cleanContainer}>
                    <Button type="submit" variant="light" onClick={clearCart}>
                      Clean 
                    </Button>
                   </div>
                   <Button variant="light">Pay</Button>
                </div>
              </>
            ))}
          </div></div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Modal;
