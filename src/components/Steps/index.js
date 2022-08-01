import React from "react";

import { ReactComponent as Briefcase } from "../../images/briefcase.svg";
import { ReactComponent as Rocket } from "../../images/rocket.svg";
import { ReactComponent as Leaf } from "../../images/leaf.svg";
import { ReactComponent as Next } from "../../images/arrow.svg";
import "./style.scss";
const Steps = () => {
  return (
    <section className="steps flex">
      <div className="step flex flex__column">
        <Briefcase className="step__image" />
        <p className="step__text">Pack</p>
      </div>
      <Next />
      <div className="step flex flex__column">
        <Rocket className="step__image" />
        <p className="step__text">Fly</p>
      </div>
      <Next />
      <div className="step flex flex__column">
        <Leaf className="step__image" />
        <p className="step__text">Live</p>
      </div>
      <Next />
      <div className="step flex flex__column step--last">
        <p className="step__message">
          <span className="step__message__highlight"> Enjoy </span>A new world!
        </p>
      </div>
    </section>
  );
};

export default Steps;
