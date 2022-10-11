import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import menu_icon from "../../assets/images/HomePage/menu_open.svg";

import useWindowSize from "../utils/useWindowSize";
const NavbarMenu = () => {
  const size = useWindowSize();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  console.log(size);
  return (
    <div className="container ">
      <div className="d-flex justify-content-between align-items-center nav_bar">
        <div>
          <img src={logo} />
        </div>
        {size.width < 768 && (
          <button className="get_a_quote_btn py-2 nav_btn">Get a quote</button>
        )}

        {size.width < 768 ? (
          isOpenMenu ? (
            <span onClick={() => setIsOpenMenu(!isOpenMenu)}>&#10006;</span>
          ) : (
            <img src={menu_icon} onClick={() => setIsOpenMenu(!isOpenMenu)} />
          )
        ) : null}

        {size.width >= 768 && (
          <div className="d-flex">
            <ul className="d-md-flex list_style_none align-items-md-center">
              <li className="mx-2" style={{ color: "#FF7A01" }}>
                Home
              </li>
              <li className="mx-2">Products</li>
              <li className="mx-2">Team</li>
              <li className="mx-2">Portfolio</li>
              <li className="mx-2">Careers</li>
              <li className="mx-2">Case Studies</li>
              <li className="mx-2">Login</li>
            </ul>
            <button className="get_a_quote_btn py-2 nav_btn">
              Get a quote
            </button>
          </div>
        )}
      </div>
      {/* Mobile navbar */}
      {size.width < 768 && (
        <div
          className={`${isOpenMenu ? "open_menu" : "close_menu"} mobile_nav`}
        >
          <ul className="list_style_none">
            <li className="mx-2" style={{ color: "#FF7A01" }}>
              Home
            </li>
            <li className="mx-2">Products</li>
            <li className="mx-2">Team</li>
            <li className="mx-2">Portfolio</li>
            <li className="mx-2">Careers</li>
            <li className="mx-2">Case Studies</li>
            <li className="mx-2">Login</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarMenu;
