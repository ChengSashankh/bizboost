const express = require('express');

const router = express.Router();

router.post('/add', function (req, res) {
    let { itinerary, PAN, secret } = req.body;
    res.json({
        "authorized": true,
        itinerary
    });
    res.end();
});

router.delete('/delete', function (req, res) {
    let { itinerary, PAN, secret } = req.body;
    res.json({
        "removed": true
    });
    res.end();
});

module.exports = router;