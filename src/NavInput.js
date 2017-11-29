import React from 'react';
import { Link, Route } from 'react-router-dom';
import MobileNav from './MobileNav';
import Dropzone from 'react-dropzone';

class NavInput extends React.Component {
    constructor() {
        super()
        this.state = {
            img: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    changeHandler(e) {

        this.setState({
            img: e.target.value
        })
        console.log(this.state.img)
    }
    handleSubmit(e) {

        e.preventDefault()
        this.props.addImg(this.state.img)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="file-field input-field">
                        <div className="btn" id="dropbutton">
                            <span>File</span>
                            <input type="file" />
                        </div>
                        <div className="file-path-wrapper">
                            <input onChange={this.changeHandler} className="file-path validate" type="text" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default NavInput;
