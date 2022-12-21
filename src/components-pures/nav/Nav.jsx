import React, { useContext } from "react";
import logo from "../../images/logo.svg";
import iconCart from "../../images/icon-cart.svg";
import imageAvatar from "../../images/image-avatar.png";
import '../../styles/_effectHover.sass'
import { UserContext } from "../../context/Context";
import { Badge } from "react-bootstrap";
import NavMobile from "./NavMobile";
import nav from '../../styles/nav.module.sass'

const Nav = () => {
  const { setChangeState, changeState, cart } = useContext(UserContext);

  return (
    <header className={nav.navContainer}>
      <nav>
        <NavMobile />
        {/* this menu, it show when the resolution is higher to 800px */}

        <section className={nav.navLeft}>
          <img src={logo} alt="logo navegation" className={nav.imgLogo} />

          <a href="/">Collections</a>
          <a href="/">Men</a>
          <a href="/">Women</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </section>

          {/* not change:  icon cart and image avatar   */}
        <section className={nav.navRight}>
          <div className="carrito__nav">
            <button className={nav.iconCart}>
              {cart.map((item) => (
                <Badge
                 bg="warning"
                  pill
                  text="dark"
                  className="badge"
                  key={item.id}
                >
                  {item.quantity}
                </Badge>
              ))}
              <img
                src={iconCart}
                alt="cart shopping"
                onClick={() => setChangeState(!changeState)}
                className={nav.icon}
              />
            </button>
          </div>
          <img src={imageAvatar} alt="photo avatar" className={nav.avatar} />
        </section>
      </nav>
    </header>
  );
};

export default Nav;
