import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../context";
function Navbar() {
  const { openSidebarMenu, total, amount, cart, openIsCartOpen } =
    useGlobalContext();
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <p className="nav-logo">
            <Link to={"/"}>MINA</Link>
          </p>
        </div>
        <div className="main-nav">
          <button className="btn-toggle toggle" onClick={openSidebarMenu}>
            <FaBars />
          </button>
          <ul className="nav-items">
            <li className="nav-item">
              <Link to={"/shope"}>Shope</Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="nav-item" onClick={openIsCartOpen}>
              <a href="#">
                <FaCartPlus /> Cart ({amount})
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
