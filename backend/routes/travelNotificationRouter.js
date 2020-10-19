const express = require('express');

const router = express.Router();

router.get('/add', function (req, res) {
    res.end('Add itinerary end point');
});

router.get('/delete', function (req, res) {
    res.end('Remove itinerary end point');
});

module.exports = router;