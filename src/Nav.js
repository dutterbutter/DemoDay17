import React, { Component } from 'react';

class NavBar extends Component {
    render()  {
        return (
            <nav>
            <div className="nav-wrapper nav">
              <div className="left web-title">Foodify</div>
              <img src="./food.png" width="30" height="30" className=" logo-img left align-top" alt="foodify" />
              <div className=" right navbar-nav explain hide-on-med-and-down">
                <div className="nav-item instruction text-justify">Place an image of a food item into the designated dropzone below.<span className="sr-only">(current)</span></div>
                <div className="nav-item instruction">Using Google's ML Vision API along with Yummly API, relevant information</div>
                <div className="nav-item instruction">is generated below. It's almost like MAGIC! Go Ahead and Try!</div>
              </div>
              <div className="right how-works hide-on-med-and-down">
                <div className="word">HOW IT</div>
                <div className="word">WORKS</div>
              </div>
            </div>
          </nav>
        )
    }
}

export default NavBar;