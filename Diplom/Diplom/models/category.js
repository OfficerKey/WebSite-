var mongoose = require('mongoose');

// Category Schema
var CategorySchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    }

});

var Categories = module.exports = mongoose.model('Categories', CategorySchema);