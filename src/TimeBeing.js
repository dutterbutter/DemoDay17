import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageCapture from './ImageCapture';


class TimeBeing extends Component {
    render() {

        return (
            
                <div className="row mobileBar">
                    {/* <ImageCapture /> */}
                   
                    <div className="col s12" id="dropzone2">
                        <Dropzone onDrop={this.props.onDrop} />
                            Add an image file
                    </div>
                </div>
           
        )
    }
}
export default TimeBeing