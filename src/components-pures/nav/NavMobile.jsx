import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/Context";
import imgMenu from "../../images/icon-menu.svg";
import close from "../../images/icon-close.svg";
import logo from "../../images/logo.svg";
import nav from "../../styles/nav.module.sass";
import modal from "../../styles/modal.module.sass";
import "../../styles/_effectHover.sass";
const NavMobile = () => {
  const { onlyNav, setOnlyNav } = useContext(UserContext);

  return (
    // logo SNEAKERS
    <div className={nav.navLeftMobile}>
      <img
        src={imgMenu}
        alt="menu mobile"
        className={nav.imgMenu}
        onClick={() => setOnlyNav(!onlyNav)}
      />
      <img src={logo} alt="logo" className={nav.imgLogo} />

      {/* this menu, it show when the resolution is less to 800px*/}

      {onlyNav ? (
        <div className={nav.modalSide}>
          <div className={nav.modalBody}>
            <button
              className={modal.btnClose}
              onClick={() => setOnlyNav(!onlyNav)}
            >
              <img src={close} alt="button close" />
            </button>

            <section className={nav.sectionBody}>
              <a href="">Collections</a>
              <a href="">Men</a>
              <a href="">Women</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </section>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavMobile;
