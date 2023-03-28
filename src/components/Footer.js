import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          {/*<img src= alt="Logo" className="footer__logo" />*/}
          <p className="footer__address">
            Adres: ul. Przykładowa 123, 00-000 Wrocław
          </p>
        </div>
        <div className="footer__center">
          <p className="footer__email">E-mail: kontakt@example.com</p>
        </div>
        <div className="footer__right">
          <a
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="footer__icon" />
          </a>
          <a
            href="https://twitter.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="footer__icon" />
          </a>
          <a
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
