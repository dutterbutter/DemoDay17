require('dotenv').config()
const express = require('express');
const Vision = require('@google-cloud/vision');
const firebase = require('firebase');
const vision = new Vision(); // Creates a client
const cors = require('cors')
const fileReader = require('filereader')
const reader = new fileReader();
const axios = require('axios');
const mongoose = require('mongoose');
const Food = require('./models/Food');

const deploy = require('./src/keys.js');
app = express();
PORT = process.env.PORT || 8080

const MONGO_CONNECTION_STRING = 'mongodb://localhost:27017/data/db'
mongoose.connect(MONGO_CONNECTION_STRING);
const connection = mongoose.connection;


app.use(express.static(__dirname+'/build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const admin = require("firebase-admin");
const serviceAccount = deploy.firepack;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://fir-day2017.firebaseio.com"
});

app.post('/foodify', (req, res) => {
    const image = {
        source: { imageUri: req.body.downloadURL }
    }

    let result = {}
    let yummyObj;

    vision.webDetection(image)
        //****************************** VISION API REQUEST */
        .then(response => {

            foodItem = response[0].webDetection.webEntities[0].description;
            yummyObj = response[0].webDetection.webEntities[0].description.replace(/\s+/g, "+");
            result.vision = response[0].webDetection;
            let appId = deploy.yumid;
            let appKey = deploy.yumKey;
            let url = "http://api.yummly.com/v1/api/recipes?_app_id=" + appId + "&_app_key=" + appKey + "&q=" + yummyObj + '&'

            return axios.get(url)

        })
        //****************************** YUMMLY API REQUEST */
        .then((response) => {
            result.yummly = response.data;

            let urlWiki = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + yummyObj + "&limit=5"
            return axios.get(urlWiki);

        })
        
        //****************************** GOOGLE PLACES API REQUEST */
        .then((response) => {
            result.wiki = response.data;
            // result.nutrient = response.data;

            let key = deploy.placeKey
            let baseURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + yummyObj + '+in+Toronto&type=restaurant&key=' + key

            return axios.get(baseURL);
        })
        //****************************** GOOGLE PHOTOSX API REQUEST */
        .then((response) => {
            result.places = response.data;

            Food({
                visionName: foodItem,
                imageURI: req.body.downloadURL,
                description: result.wiki[2],
                ingredients: result.yummly.matches[0].ingredients
            }).save()
                .then(foodItem => {
                    result.pastFoodItem = foodItem
                    res.send(result);

                })
                .catch(error => {
                    console.log(error);
                    res.sendStatus(500).send("We have encountered an error");
                })

            // let reference;
            // let key = deploy.photoKey
            // let photoURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+ reference + "&key=" + key
            // return axios.get(photoURL);
        })
        // .then((response) => {
        //     result.photos = response.data;
        //     res.send(result);
        // })
        .catch(err => {
            console.error(err);
        });
})







app.get('/foodify', (req, res) => {
    Food.find({})
        .then(food => {
            res.json(food);
        })
        .catch(error => {
            console.log(error);
            res.sendStatus(500).send("We have encountered an issue");
        })
})

// app.delete('/foodify/:foodId', (req, res) => {
//     Food.findOneAndRemove({ _id: req.params.foodId })
//         .then(removedProp => {
//             res.json(removedProp);
//         })
//         .catch(error => {
//             res.send(error);
//             console.log(error);
//         })
// })


app.get('*', (req, res) => {
    res.sendFile(__dirname+'/build/index.html')
})


connection.on("open", () => {
    console.log("we are connected to mongo");
    app.listen(PORT, _ => {
        console.log(`Express listening on ${PORT}, ctrl+c to kill.`)
    })
})