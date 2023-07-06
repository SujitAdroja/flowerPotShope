import React from "react";
import { FaTimes, FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "../context";

import { Link } from "react-router-dom";
function Sidebar() {
  const { openSidebar, closeSidebarMenu, amount, openIsCartOpen } =
    useGlobalContext();
  return (
    <aside className={openSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}>
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebarMenu}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          <article>
            <div className="sidebar-sublink" onClick={closeSidebarMenu}>
              <Link to={"/shope"} className="sidebar-link">
                Shope
              </Link>
            </div>
          </article>
          <article>
            <div className="sidebar-sublink" onClick={closeSidebarMenu}>
              <Link to={"/about"} className="sidebar-link">
                About
              </Link>
            </div>
          </article>
          <article>
            <div className="sidebar-sublink" onClick={closeSidebarMenu}>
              <Link to={"/contact"} className="sidebar-link">
                Contact
              </Link>
            </div>
          </article>
          <article>
            <div
              className="sidebar-sublink"
              onClick={() => {
                closeSidebarMenu();
                openIsCartOpen();
              }}
            >
              <a href="#" className="sidebar-link">
                <FaCartPlus /> Cart ({amount})
              </a>
            </div>
          </article>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
