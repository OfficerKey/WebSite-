var express = require('express');
var router = express.Router();

var Page = require('../models/page');



router.get('/', function (req, res) {
    Page.find({}).sort({ sorting: 1 }).exec(function (err, pages) {
        res.render('category', {
            pages: pages
        });
    });
});

/*
 * GET add page
 */
router.get('/category', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: 'category' }, function (err, page) {
        if (err) { console.log(err); }

        if (!page) { res.redirect('/'); }
        else { res.render('add_page', { title: page.title, content: page.content }); }


    });

});

module.exports = router;