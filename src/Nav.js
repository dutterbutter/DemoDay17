import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper nav">
          <div className="left web-title">Foodify</div>
          <img src="./food.png" width="30" height="30" className=" logo-img left align-top" alt="foodify" />
          <div className="right hide-on-med-and-down">
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a><Link to="/GoogleVision">Google Vision</Link></a></li>
              <li><a><Link to="/MoreFood">More Food</Link></a></li>
              <li><a><Link to="/Author">Author</Link></a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a className="sideMob"><Link to="/GoogleVision">Google Vision</Link></a></li>
              <li><a className="sideMob"><Link to="/MoreFood">More Food</Link></a></li>
              <li><a className="sideMob"><Link to="/Author">Author</Link></a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;