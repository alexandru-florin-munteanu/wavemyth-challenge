import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "../ShoppingCart";
import { ReactComponent as HomeIcon } from "../../images/home-icon.svg";
import { ReactComponent as PlanetIcon } from "../../images/circle-icon.svg";
import { ReactComponent as RocketIcon } from "../../images/rocket-icon.svg";
import "../utils.scss";
import "./style.scss";
import { getCartItems } from "../redux/selectors/cart";

const Header = () => {
  const cartCount = useSelector(getCartItems);
  return (
    <header className="header flex flex__row">
      <div className="header__wrapper flex flex__row">
        <nav className="header__navbar flex flex__row">
          <h4 className="header__logo">Cosmos</h4>
          <ul className="header__navbar__list flex flex__row">
            <li className="header__navbar__link flex flex__row">
              <HomeIcon />
              <a href="#">Home</a>
            </li>
            <li className="header__navbar__link flex flex__row">
              <PlanetIcon />
              <a href="#">Destinations</a>
            </li>
            <li className="header__navbar__link flex flex__row">
              <RocketIcon />
              <a href="#">Spaceships</a>
            </li>
          </ul>
        </nav>
        <ShoppingCart />
      </div>
    </header>
  );
};

export default Header;
