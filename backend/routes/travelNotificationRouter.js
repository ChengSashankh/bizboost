const express = require('express');
const vdpInterfaceInstance = require('../handlers/VDPInterface/VDPInterface');

const router = express.Router();

router.post('/add', function (req, res) {
    let { itinerary, PAN, secret } = req.body;
    vdpInterfaceInstance.addTravelItinerary().then(results => {
        res.json(JSON.parse(results));
        res.end();
    }).catch(error => {
        throw new Error(error);
    });

    // res.json({
    //     "authorized": true,
    //     itinerary
    // });
    // res.end();
});

router.delete('/delete', function (req, res) {
    let { itinerary, PAN, secret } = req.body;
    res.json({
        "removed": true
    });
    res.end();
});

module.exports = router;