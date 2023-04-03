import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Login from "./Login";

const Home = () => (
  <>
    <section className={"home"}>
      <section className={"header"}>
        <div className={"header__container container"}>
          <Navigation />
          <Login />
        </div>
      </section>
      <Outlet />
      <Footer />
    </section>
  </>
);

export default Home;
