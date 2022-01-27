import React from "react";
import { Link } from "react-router-dom";

const ServiceNav = ({ title, setActive}) => (

  <li className="nav-item mt-2">
    <a
      className={`nav-link text-active-primary ms-0 me-10 py-2 ${setActive}`}
      href="/metronic8/demo1/../demo1/pages/profile/overview.html"
    >
      {title.toUpperCase()}
    </a>
  </li>
 
);

export default ServiceNav;
