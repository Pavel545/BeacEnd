const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        minLength:2,
    },
    author:{
        type:String,
        required:true,
        minLength:2,
    },
    age:{
        type:Number,
        required:true,
    }

})
module.export = mongoose.model('book',bookSchema)