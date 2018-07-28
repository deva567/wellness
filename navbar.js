import React, { Component } from 'react';
import './navbar.css';
import logoq from './logoq.jpg';
import Menus from './menus';
class Navigation extends Component {

  render() {
    return (
      <div className="App">
       <nav className="navbar  navbar-expand-lg navbar-fixed-top ">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item">
      <a className="nav-link" href="/Help"><i className="fa fa-question"> Help</i></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/Storelocator"><i className="fa fa-home"> Storelocator</i></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
    <a className="nav-link" href="/Contactus"><i className="fa fa-mobile"> Contact us</i></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/Signup"><i className="fa fa-users"> Login | Signup</i></a>
    </li>
  </ul>
</nav>
  < p className="search">
  <input type="text" id="search" placeholder="search here ..."/>
  <button type="submit"><i className="fa fa-search"></i></button>
  </p><div className="logo">
  <img src={logoq} alt="my logo"/><p>MATHRUKA NATURAL WELLNESS STORE</p>
  </div>
  <div className="menus-h">
  <Menus />
  </div>
  
      </div>
      
    );
  }
}

export default Navigation;