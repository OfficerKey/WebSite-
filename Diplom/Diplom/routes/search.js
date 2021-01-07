var express = require('express');
var router = express.Router();


// get /

var Category = require('../models/category');

var Product = require('../models/products');



router.get('/', function (req, res) {
    var ProductTitle = req.query.title
    Product.find({ $text: { title: ProductTitle } },function (err, products) {
        if (err) { console.log(err); }


        res.render('cat_product', { title: c.title, products: products });

    });

});

router.get('/products/search', function (req, res) {
    var ProductTitle = req.query.title
    Product.find({ $text:{ title: ProductTitle } }, function (err, products) {
        if (err) { console.log(err); }


        res.render('cat_product', { title: c.title, products: products });

    });
});




module.exports = router;