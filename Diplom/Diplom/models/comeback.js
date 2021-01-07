var mongoose = require('mongoose');

// Product Schema
var OrdersSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    qtu: {
        type: String,
        required:true
    },
    
    price: {
        type: Number,
        required: true
    }

});

var Order = module.exports = mongoose.model('Order', OrdersSchema);