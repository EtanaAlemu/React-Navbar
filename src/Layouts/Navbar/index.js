import React, { useState } from "react";
import SidebarItems from "./SidebarItems";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Sidenav = () => {
  return (
    <>
      <div id="mySidenav" className={"sidenav"}>
        <p className="logo">
          <span>M</span>-SoftTech
        </p>
        {SidebarItems.map((item, index) => {
          return (
            <nav>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                <li>
                  <Link className="icon-a" key={index} to={item.path}>
                    <i className={item.cName}></i>
                    <span> {item.name}</span>
                  </Link>
                </li>
              </ul>
            </nav>
          );
        })}
      </div>
    </>
  );
};

export default Sidenav;
