import React, { Component } from 'react'
import './App.css'

class TopBar extends Component {
    render() {
        let cb;
        if(window.screen.width > 780){
            //cb = [0,1,2,3,4,5,6,7,8,9];
            cb= ["#0092c9","#ff0000","#ff9b00","#11a51b","#ffffff","#0092c9","#ff0000","#ff9b00","#11a51b","#ffffff"]
        }else{
            cb=["#0092c9","#ff0000","#ff9b00","#11a51b","#ffffff"];
        }
        
        let colorBar = cb.map((el, i) => {
            return <div key={i} className="color-bar" style={{backgroundColor: cb[i]}}></div>
        })
  
        return(
            <div>
                {colorBar}
            </div>
        )
    }

}
export default TopBar;