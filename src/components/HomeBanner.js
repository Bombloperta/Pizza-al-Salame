import React from "react";
import PizzeriaClock from "./PizzeriaClock";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <>
      <div className={"banner"}>
        <div className={"banner__container"}>
          <div className={"banner__text"}>
            <h1>pizza</h1>
            <span>al salame</span>
          </div>
          <div className={"banner__description"}>
            <p>najsmaczniejsza pizza w mieście</p>
          </div>
          <a className={"phone"} href={"tel:123456789"}>
            tel: 795456789
          </a>
          <PizzeriaClock />
          <Link
            to="/menu"
            className={"order__link animate__animated animate__bounceIn"}
          >
            ZAMÓW
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
