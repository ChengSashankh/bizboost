const express = require('express');
const vdpInterfaceInstance = require('../handlers/VDPInterface/VDPInterface');

const router = express.Router();

router.post('/add', function (req, res) {
    let { itinerary, PANs } = req.body;
    let { 
        returnDate, 
        partnerBid,
        departureDate,
        destinations
    } = itinerary;

    let requestBody = {
        addTravelItinerary: {
            returnDate,
            partnerBid,
            departureDate,
            destinations,
            primaryAccountNumbers: PANs
        }
    };

    vdpInterfaceInstance.addTravelItinerary(requestBody).then(results => {
        res.json(JSON.parse(results));
        res.end();
    }).catch(error => {
        throw new Error(error);
    });
});

router.delete('/delete', function (req, res) {
    let { itinerary, PAN, secret } = req.body;
    res.json({
        "removed": true
    });
    res.end();
});

module.exports = router;