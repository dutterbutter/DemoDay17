import React from 'react';
import Webcam from 'react-webcam';

class ImageCapture extends React.Component {
    setRef = (webcam) => {
      this.webcam = webcam;
    }
  
    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
    };
  
    render() {
      return (
        <div className="col s3">
          <Webcam
            audio={false}
            height={150}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={150}
          />
          {/* <button className="capture" onClick={this.capture}>Capture photo</button> */}
          <a class="btn-floating btn-large waves-effect waves-light red"><i className=" capture material-icons" onClick={this.capture}>camera_alt</i></a>
        </div>

      );
    }
  }
  export default ImageCapture;