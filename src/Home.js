import React, { Component } from 'react';
import './App.css';
import { Helmet } from "react-helmet";
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-materialize';
import './App.css';
import * as firebase from 'firebase';
import TopBar from './TopBar';
import Nav from './Nav';
import Upload from './Upload';
import Footer from "./Footer";
import RecipeReviewCard from './RecipeReviewCard';
import FormGroup from './FormGroup';
import Squares from './Squares';
import { Link, Route } from 'react-router-dom';
import MoreFood from './MoreFood';
import { localURL } from './keys';

class Home extends Component {
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


        this.onDrop = this.onDrop.bind(this);
        this.addImg = this.addImg.bind(this)
    }

    addImg(downloadURL) {

        axios.post(localURL + localURL + '/foodify', { downloadURL })
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

                axios.post(localURL + '/foodify', { downloadURL })
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



    render() {

        return (

            <div className="desktop-view">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Foodify</title>
                    <link rel="canonical" href="./food.png" />
                </Helmet>

                <Nav />

                <div className="App" >
                    <TopBar />
                    <Upload onDrop={this.onDrop} />
                    <div className="container">
                        <div className="row">
                            {/* <FormGroup addImg={this.addImg} /> */}
                            {/* <NavInput onDrop= {this.onDrop} /> */}
                          
                        </div>
                    </div>
                    <RecipeReviewCard
                        foodVision={this.state.foodVision}
                        yum={this.state.yummly}
                        food={this.state.food}
                        wiki={this.state.wiki}
                    />

                </div>
               
                
            </div>

        );
    }
}

export default Home;
