import React from 'react';
import { Link, Route } from 'react-router-dom';

class MobileNav extends React.Component {


    render() {

        let f = {
            color:'#0092c9'
        }
        let o = {
            color:'#ff0000'
        }
        let o2 = {
            color:'#3d3c3d'
        }
        let d = {
            color:'#11a51b'
        }
        let i = {
            color:'#ffffff'
        }
        let f2 = {
            color:'#0092c9'
        }
        let y = {
            color:'#ff0000'
        }
        return (
            <div>
                <nav className="nav-extended">
                    <div className="nav-wrapper">
                        <a className="brand-logo center-align">
                        <Link to="/">
                                <span style={f}>F</span>
                                <span style={o}>o</span>
                                <span style={o2}>o</span>
                                <span style={d}>d</span>
                                <span style={i}>i</span>
                                <span style={f2}>f</span>
                                <span style={y}>y</span>
                        </Link>
                        </a>
                        <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a><Link to="/GoogleVision">Google Vision</Link></a></li>
                            <li><a><Link to="/sqaures">More Food</Link></a></li>
                           
                        </ul>
                        <ul className="side-nav" id="mobile-demo">
                            <li><a className="sideMob"><Link to="/GoogleVision">Google Vision</Link></a></li>
                            <li><a className="sideMob"><Link to="/sqaures">More Food</Link></a></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default MobileNav;