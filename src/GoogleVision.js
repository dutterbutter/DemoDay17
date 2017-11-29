import React from 'react';
import { Link, Route } from 'react-router-dom';

class GoogleVision extends React.Component {
    render() {
        return (
            <div>
                <h1 className="cloud-title">CLOUD VISION API</h1>
                <p className="cloud-content">Google Cloud Vision API enables developers to understand
                    the content of an image by encapsulating powerful machine
                    learning models in an easy to use REST API. It quickly classifies
                    images into thousands of categories (e.g., "sailboat", "lion", "Eiffel Tower"),
                    detects individual objects and faces within images, and finds and reads printed
                    words contained within images. You can build metadata on your image catalog,
                    moderate offensive content, or enable new marketing scenarios through image
                    sentiment analysis. Analyze images uploaded in the request or integrate with
                    your image storage on Google Cloud Storage.</p>
                <h2 className= "cloud-sub">Insight From Your Images</h2>
                <p className="cloud-content">Easily detect broad sets of objects in your images, from flowers, animals,
                  or transportation to thousands of other object categories commonly found within
                images. Vision API improves over time as new concepts are introduced and accuracy
                is improved. </p>
                <h3 className= "cloud-sub">Other Features</h3>
                <ul className="cloud-content">
                    <li>Face Detection</li>
                    <li>Detect Inappropriate Content</li>
                    <li>Power of the Web</li>
                    <li>Extract Text</li>
                    <li>Label Detection</li>
                    <li>Logo Detection</li>
                    <li>Landmark Detection</li>
                </ul>
            </div>
        )
    }
}
export default GoogleVision;