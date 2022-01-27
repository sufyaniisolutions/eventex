import React from 'react';
import {Link} from 'react-router-dom';
const Header = () => (

    <div>
       {/* Start Header Section  */}
      <header id="header" className="fixed-top fixed-top header-inner-pages">
        <div className="container d-flex align-items-center justify-content-lg-between">

          <a href="javascript:;"><img src="assets/img/logo.svg" alt="Logo" className="logo me-auto me-lg-0" /></a>
        
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className="nav-link scrollto" to='/'>Home</Link></li>
              <li><Link className="nav-link scrollto" to='/category'>Services</Link></li>
              <li><Link className="nav-link scrollto" to='/become-supplier'>Become a Supplier</Link></li>
              <li><Link className="nav-link scrollto" to='/contact-us'>Contact Us</Link></li>
              <li><Link className="nav-link scrollto ms-5" to='/login'>Login</Link>
              </li>
              <li><Link className="nav-link scrollto" to='/signup'>Sign Up</Link></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a href="#about" className="get-started-btn scrollto">Plan an Event</a>

        </div>
      </header>
    </div>

 
);

export default Header;