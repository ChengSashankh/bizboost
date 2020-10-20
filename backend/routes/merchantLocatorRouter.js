const express = require('express');
const vdpInterfaceInstance = require('../handlers/VDPInterface/VDPInterface');

const router = express.Router();

router.post('/search', function (req, res) {
    let { latitude, longitude, radius, maxResults, query } = req.body;
    console.log("Calling searchForMerchant()");

    if (query === undefined) {
        res.error("query value not set in body");
        res.end();
    }

    vdpInterfaceInstance.searchForMerchant(query).then((result) => {
        res.json(JSON.parse(result));
        res.end();
    }).catch(error => {
        console.log("Error is: " + error);
    });
});

module.exports = router;