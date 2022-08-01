import React from "react";
import Carousel, { CarouselItem } from "../Carousel";
import Steps from "../Steps";
import Package from "../Package";
import "../utils.scss";

const MainView = () => {
  return (
    <main className="flex flex__column">
      <Carousel>
        <CarouselItem key={1} planetName="Enceladus" priceTag={999990} />
        <CarouselItem key={2} planetName="Acheron" priceTag={999990} />
        <CarouselItem key={3} planetName="Oceanus" priceTag={999990} />
      </Carousel>
      <Steps />
      <Package />
    </main>
  );
};

export default MainView;
