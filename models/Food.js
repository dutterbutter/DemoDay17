const mongoose = require('mongoose');
Schema = mongoose.Schema;

const foodSchema = new Schema({
    visionName : {type : String},
    imageURI : {type: String},
    description: {type: String},
    ingredients: {type: Array}
    
 
});

const FoodModel = mongoose.model("Food", foodSchema);

module.exports = FoodModel;