import React, { useState } from "react";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/8095667/pexels-photo-8095667.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/9743698/pexels-photo-9743698.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/9256867/pexels-photo-9256867.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ArrowLeftIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <ArrowRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
