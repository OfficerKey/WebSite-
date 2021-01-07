var express = require('express');
var router = express.Router();

var Page = require('../models/page');
// get /



router.get('/', function (req, res) {
    Page.findOne({ slug: 'home' }, function (err, page) {
        if (err) { console.log(err); }


        res.render('index', { title: page.title, content: page.content });

    });

});

var Callback = require('../models/callback');

router.post('/email', (req, res) => {

    const { name, email, text } = req.body;
    console.log('Data', req.body);


    console.log(name);
    console.log(email);
    console.log(text);

    var callback = new Callback({
        name: name,
        email: email,
        desc: text
    });
    console.log(callback);
    callback.save(function (err) {
        if (err) { console.log(err); }

        Callback.find(function (err, callbacks) {
            if (err) {
                console.log(err);
            } else {
                req.app.locals.callbacks = callbacks;
            }
        });
    });





});



// get page
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({ slug: slug }, function (err, page) {
        if (err) { console.log(err); }

        if (!page) { res.redirect('/'); }
        else { res.render('index', { title: page.title, content: page.content }); }


    });



});




module.exports = router;