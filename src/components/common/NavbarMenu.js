import React from "react";
import logo from "../../assets/images/logo.svg";
const NavbarMenu = () => {
  return (
    <div className="container  ">
      <div className="d-flex justify-content-between align-items-center nav_bar">
        <div>
          <img src={logo} />
        </div>
        <ul className="d-flex list_style_none align-items-center">
          <li className="mx-2" style={{ color: "#FF7A01" }}>
            Home
          </li>
          <li className="mx-2">Products</li>
          <li className="mx-2">Team</li>
          <li className="mx-2">Portfolio</li>
          <li className="mx-2">Careers</li>
          <li className="mx-2">Case Studies</li>
          <li className="mx-2">Login</li>
          <li className="mx-2">
            <button className="get_a_quote_btn py-2">Get a quote</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarMenu;
