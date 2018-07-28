import React, { Component } from 'react';
import './menus.css';
import Home from './Home';
import itema from './itema';
import itemb from './itemb';
import itemc from './itemc';
import itemd from './itemd';
import iteme from './iteme';
import itemf from './itemf';
import Signup from './signup';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
class Menus extends Component {
  render() {
    return (
      <HashRouter>
     
      <div className="menu">
    
        <nav>
  <ul className="nav">
    <li><NavLink  activeClassName="is-active" to="/">Home</NavLink></li>
    <li><a href="#item">Grocery</a>
      <ul>
        <li><NavLink to="/itema">Itema</NavLink></li>
        <li><NavLink to="/itemb">Itemb</NavLink></li>
        </ul>
    </li>
    <li><a href="#item">Recipes</a>
      <ul>
        <li><a href="#item">item a long submenu</a></li>
        <li><NavLink to="/itemc">itemc</NavLink>
          <ul>
            <li><NavLink to="/itemd">itemd</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="/iteme">iteme</NavLink></li>
        </ul>
    </li>
    
    <li><a href="#item">Deals</a>
      <ul>
        <li><NavLink to="/Signup">itemf</NavLink></li>
        </ul>
    </li>
    
  </ul>
  <div className="content">
  <Route exact path="/" component={Home}/>
  <Route path="/itema" component={itema}/>
  <Route path="/itemb" component={itemb}/>
   <Route path="/itemc" component={itemc}/>
    <Route path="/itemd" component={itemd}/>
    <Route path="/iteme" component={iteme}/>
    <Route path="/Signup" component={Signup}/>
  

</div>
</nav>
</div>
</HashRouter>
     
    );
  }
}

export default Menus;