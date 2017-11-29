import React, { Component } from 'react';
import { Helmet } from "react-helmet";
// import './App.css';
import * as firebase from 'firebase';
import TopBar from './TopBar';
import Nav from './Nav';
import Squares from './Squares';
import { Link, Route } from 'react-router-dom';
import Mobile from './Mobile';
import Home from './Home';
import GoogleVision from './GoogleVision';
import Author from './Author';
import Deploy from './keys.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      empty: ""
    }
    const config = Deploy.configFire;
    firebase.initializeApp(config);
    this.detectmob = this.detectmob.bind(this)

   
  }
  // detectmob() { 
  //   if( navigator.userAgent.match(/Android/i)
  //   || navigator.userAgent.match(/webOS/i)
  //   || navigator.userAgent.match(/iPhone/i)
  //   || navigator.userAgent.match(/iPad/i)
  //   || navigator.userAgent.match(/iPod/i)
  //   || navigator.userAgent.match(/BlackBerry/i)
  //   || navigator.userAgent.match(/Windows Phone/i)
  //   ){
  //      return <Mobile />;
  //    }
  //   else {
  //      return <Home />;
  //    }
  //  }
  detectmob() {
  
    if(window.innerWidth <= 800 && window.innerHeight <= 750) {
      return <Mobile />;
    } else {
      return <Home />;
    }
 }

  render() {


    
  
    return (
      //past={this.state.pastFood} 
      <div>
        

          <div>
            {this.detectmob()}
            <Route path="/squares" render={() => <Squares />} />
            <Route path ="/GoogleVision" render={() => <GoogleVision />} />
          </div >
        
        {/* <a className="waves-effect waves-light btn"><Link to="/foodifyMobile">mobile</Link></a> */}
         {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
