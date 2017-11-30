import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import ImageCapture from './ImageCapture';


class TimeBeing extends Component {
    render() {

        return (

            <div className="row mobileBar">
                {/* <ImageCapture /> */}
                <form action="#">
                    <div className="file-field input-field">
                        <div className="btn foodMob">
                        File
                            
                        </div>
                        <div id="dropzone2">  
                            <Dropzone onDrop={this.props.onDrop} />
                        </div>
                    </div>
                </form>
                {/* <div className="col s12" id="dropzone2">
                    <Dropzone onDrop={this.props.onDrop} />

                </div> */}
            </div>

        )
    }
}
export default TimeBeing