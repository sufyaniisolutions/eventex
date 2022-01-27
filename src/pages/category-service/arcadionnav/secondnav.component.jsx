import React from 'react';
import {Link} from 'react-router-dom';

const ArcadionNav = () => (

  <div className=" pt-5">
    <nav
      className="navbar second-navbar fixed-top navbar-toggleable-md navbar-expand-lg scrolling-navbar double-nav d-flex justify-content-center">
   
      <ul className="nav navbar-nav nav-flex-icons ml-auto">
        <li className="nav-item">
        <Link to='/category-services' className="nav-link-active"><span className="">Venues</span> </Link>
         
        </li>
        <li className="nav-item">
        <Link to='/category-services' className="nav-link"><span className="clearfix d-none d-sm-inline-block">Food & Beverages</span> </Link>
         
        </li>
        <li className="nav-item">
        <Link to='/category-services' className="nav-link"><span className="clearfix d-none d-sm-inline-block">Equipment & Decor</span> </Link>
         
        </li>
        <li className="nav-item">
        <Link to='/category-services' className="nav-link"><span className="clearfix d-none d-sm-inline-block">Photo & Video</span> </Link>
        
        </li>
        <li className="nav-item">        
        </li>
        <li className="nav-item">
        <Link to='/category-services' className="nav-link"><span className="clearfix d-none d-sm-inline-block">Transport</span> </Link>
   
        </li>
      </ul>
    </nav>
  </div>

 
);

export default ArcadionNav;