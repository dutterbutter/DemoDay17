import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageCapture from './ImageCapture';


class Upload extends Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                    {/* <ImageCapture /> */}
                   
                    <div className="col s12 clickable" id="dropzone">
                        <Dropzone onDrop={this.props.onDrop} />

                        <div className="direction col s4">
                            <i className="material-icons photo-icon">add_a_photo</i>
                            Drag your food images here <br />
                            or browse from your computer
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
export default Upload