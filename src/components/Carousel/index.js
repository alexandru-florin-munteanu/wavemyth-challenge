import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainButton from "../MainButton";
import { ReactComponent as Arrow } from "../../images/arrow.svg";
import { purchaseDeal, checkout } from "../redux/actions/cart";

import "../utils.scss";
import "./style.scss";

export const CarouselItem = ({ width, planetName, priceTag }) => {
  const dispatch = useDispatch();

  const addToCartHandler = function () {
    dispatch(purchaseDeal({ planetName, priceTag }));
  };

  return (
    <div className="carousel__item" style={{ width: width }}>
      <div className="carousel__item__image">
        <p className="carousel__item__details">
          <span className="carousel__item__planet">{planetName}</span>
          <br />
          The Saturn System
          <br />
          Distance: 9.5
          <br />
          AUPopulation: 3920
        </p>
      </div>
      <div className="carousel__item__info">
        <div className="carousel__item__text">
          <h3 className="carousel__item__text__heading">{planetName}</h3>
          <p className="carousel__item__text__block">
            is the sixth-largest moon of Saturn. It is about a tenth of Saturn's
            largest moon, Titan.
          </p>
          <p className="carousel__item__text__block">
            Explore this amazing cosmic marvel in a safe and fast trip with our
            aerospace company.
          </p>
        </div>
        <div className="carousel__item__cta flex flex__row">
          <div className="carousel__item__cta__text">
            <p className="carousel__item__cta__price-tag"> {priceTag} &euro;</p>
            <p className="carousel__item__cta__ticket-type">one way ticket</p>
          </div>
          <MainButton onClick={addToCartHandler}>Purchase</MainButton>
        </div>
      </div>
    </div>
  );
};
const Carousel = ({ children }) => {
  const [activeItem, setActiveItem] = useState(0);

  const updateItem = (newItem) => {
    if (newItem < 0) {
      newItem = 0;
    } else if (newItem >= React.Children.count(children)) {
      newItem = React.Children.count(children) - 1;
    }
    setActiveItem(newItem);
  };

  return (
    <section className="carousel flex flex_row">
      <div className="carousel__component flex">
        <div
          className="carousel__inner"
          style={{ transform: `translateX(-${activeItem * 100}%)` }}
        >
          {children.map((child) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
      <button
        onClick={() => {
          updateItem(activeItem - 1);
        }}
        className="carousel__btn carousel__btn--left"
      >
        <Arrow />
      </button>
      <button
        onClick={() => {
          updateItem(activeItem + 1);
        }}
        className="carousel__btn carousel__btn--right"
      >
        <Arrow />
      </button>
    </section>
  );
};
// const destinations = [
//   {
//     planetName: "Enceladus",
//     price: 999990,
//     imgPath: "../images/layers-2.png",
//     population: 3920,
//     distance: 9.5,
//   },
//   {
//     planetName: "Acheron",
//     price: 989990,
//     imgPath: "../images/layers-2.png",
//     population: 6435,
//     distance: 9.5,
//   },
//   {
//     planetName: "Oceanus",
//     price: 979990,
//     imgPath: "../images/layers-2.png",
//     population: 1250,
//     distance: 9.5,
//   },
// ];

export default Carousel;
