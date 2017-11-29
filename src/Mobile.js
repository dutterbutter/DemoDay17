import React from 'react';
import { Link, Route } from 'react-router-dom';
import MobileNav from './MobileNav';
import axios from 'axios';
import * as firebase from 'firebase';
import TimeBeing from './TimeBeing';
import Dropzone from 'react-dropzone';
import MobileTabs from './MobileTabs';
import All from './All';
import { Helmet } from "react-helmet";


class Mobile extends React.Component {
    constructor() {
        super()
        this.state = {
            foodVision: [],
            yummly: [],
            food: [],
            wikie: [],
            places: [],
            pastFood: []
        }
        this.addImg = this.addImg.bind(this)
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop = acceptedFiles => {
        let file = acceptedFiles[0];
        let storageRef = firebase.storage().ref('vision-images/' + file.name);

        let task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
            },
            function error(err) {
                console.log("Something went wrong!, ", err)
            },
            () => {
                let downloadURL = task.snapshot.downloadURL;

                axios.post('http://localhost:8080/foodify', { downloadURL })
                    .then(result => {
                        console.log(result.data);
                        let allFood = result.data
                        let foodCopy = Array.from(this.state.food)
                        foodCopy.push(allFood)

                        let newVisionItem = result.data.vision
                        let visionCopy = Array.from(this.state.foodVision)
                        visionCopy.push(newVisionItem)

                        let newYum = result.data.yummly.matches
                        let yumCopy = Array.from(this.state.yummly)
                        yumCopy.push(newYum)

                        let wiki = result.data.wiki;

                        let places = result.data.places;
                        let placesCopy = Array.from(this.state.places);
                        placesCopy.push(places);

                        let past = result.data.pastFoodItem;
                        let pastCopy = Array.from(this.state.pastFood);
                        pastCopy.push(past);

                        this.setState({
                            food: foodCopy,
                            foodVision: visionCopy,
                            images: downloadURL,
                            yummly: yumCopy,
                            wiki: wiki,
                            pastFood: pastCopy,
                            places: placesCopy,
                            // photo: result.data.photos
                        })
                    })
                console.log("Done. Enjoy.", downloadURL);
            }
        );
    }


    addImg(img) {

        let file = img;
        let storageRef = firebase.storage().ref('vision-images/' + file.name);

        let task = storageRef.put(file);
        task.on('state_changed',
            function progress(snapshot) {
            },
            function error(err) {
                console.log("Something went wrong!, ", err)
            },
            () => {
                let downloadURL = task.snapshot.downloadURL;
                axios.post('http://localhost:8080/foodify', { downloadURL })
                    .then(result => {
                        console.log(result.data);
                        let allFood = result.data
                        let foodCopy = Array.from(this.state.food)
                        foodCopy.push(allFood)

                        let newVisionItem = result.data.vision
                        let visionCopy = Array.from(this.state.foodVision)
                        visionCopy.push(newVisionItem)

                        let newYum = result.data.yummly.matches
                        let yumCopy = Array.from(this.state.yummly)
                        yumCopy.push(newYum)

                        let wiki = result.data.wiki;

                        let places = result.data.places;
                        let placesCopy = Array.from(this.state.places);
                        placesCopy.push(places);

                        document.getElementById('icon_prefix').value = '';

                        this.setState({
                            food: foodCopy,
                            foodVision: visionCopy,
                            images: downloadURL,
                            yummly: yumCopy,
                            wiki: wiki,
                            places: placesCopy,
                            past: []
                            // photo: result.data.photos
                        })
                    })
            })
    }


    render() {

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Foodify</title>
                    <link rel="canonical" href="./food.png" />
                </Helmet>
                
                <MobileNav addImg={this.addImg} />
                <TimeBeing onDrop={this.onDrop} />
                <MobileTabs />
                <All food={this.state.food} />
            </div>
        )
    }
}
export default Mobile;