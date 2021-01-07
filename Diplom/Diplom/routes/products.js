var express = require('express');
var router = express.Router();


// get /

var Category = require('../models/category');

var Product = require('../models/products');
router.get('/', function (req, res) {
    if (req.query.search) {
        const regex = new RegExp(escapeRegex(req.query.search), 'gi');
        Product.find({ title: regex }, function (err, products) {
            if (err) { console.log(err); }


            res.render('all_product', { title: 'All products', products: products });

        });
    }
    else {
       Product.find(function (err, products) {
         if (err) { console.log(err); }


         res.render('all_product', { title: 'All products', products: products });

        });
    }
    

});


// get products by category

router.get('/:category',  function (req, res) {
    var categorySlug = req.params.category;
    

    Category.findOne({ slug: categorySlug }, function (err, c) {
        Product.find({ category: categorySlug }, function (err, products) {
            if (err) { console.log(err); }


            res.render('cat_product', { title: c.title, products: products });

        });
    });
    

    

});

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};




module.exports = router;