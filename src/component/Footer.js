import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="section-footer">
      <div className="container grid grid--2--cols">
        <div className="footer-left">
          <Link to={"/"}>MINA</Link>
          <div className="icons">
            <ion-icon name="logo-twitter" className="icon"></ion-icon>
            <ion-icon name="logo-facebook" className="icon"></ion-icon>
            <ion-icon name="logo-instagram" className="icon"></ion-icon>
          </div>
        </div>
        <div className="footer-right">
          <div className="options">
            <a href="#">Payment & Delivery</a>
            <a href="#"> Returns </a>
            <Link to={"/contact"}>Contacts</Link>
          </div>
          <p>Developed by Sujit Adroja</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
