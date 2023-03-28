import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={"nav"}>
        <div
          className={`nav__toggle ${isOpen ? "active" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`header__nav ${isOpen ? "active" : ""}`}>
          <li className={"nav__element"}>
            <Link to="/" className={"nav__link"}>
              Start
            </Link>
          </li>
          <li className={"nav__element"}>
            <Link to="/about" className={"nav__link"}>
              o nas
            </Link>
          </li>
          <li className={"nav__element"}>
            <Link to="/menu" className={"nav__link"}>
              Menu
            </Link>
          </li>
          <li className={"nav__element"}>
            <Link to="/gallery" className={"nav__link"}>
              Galeria
            </Link>
          </li>
          <li className={"nav__element"}>
            <Link to="/contact" className={"nav__link"}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
