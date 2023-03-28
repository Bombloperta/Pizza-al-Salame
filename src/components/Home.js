import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Home = () => (
  <>
    <section className={"home"}>
      <section className={"header"}>
        <div className={"header__container container"}>
          <Navigation />
        </div>
      </section>
      <Outlet />
      <Footer />
    </section>
  </>
);

export default Home;
