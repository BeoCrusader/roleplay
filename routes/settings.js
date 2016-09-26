var express = require('express');
var mongoose = require('mongoose');
var Setting = require('../models/Settings.js');

var router = express.Router();

/* GET /setting listing. */
router.get('/', function(req, res, next) {
    Setting.find(function (err, settings) {
        if (err) return next(err);
        res.json(settings);
    });
});

router.post('/', function(req, res, next) {
    Setting.create(req.body, function(err, post){
        if (err) return next(err);
        res.json(post);
    })
})

router.get('/:id', function(req, res, next){
    Setting.findById(req.params.id, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
})

router.put('/:id', function(req, res, next){
    Setting.findByIdAndUpdate(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
})

router.delete('/:id', function(req, res, next){
    Setting.findByIdAndRemove(req.params.id, req.body, function(err, post){
        if(err) return next(err);
        res.json(post);
    })
})

module.exports = router;