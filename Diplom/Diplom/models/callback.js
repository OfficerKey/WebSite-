var mongoose = require('mongoose');

// Product Schema
var CallbackSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String
    },
    desc: {
        type: String,
        required: true
    }

});

var Callback = module.exports = mongoose.model('Callback', CallbackSchema);