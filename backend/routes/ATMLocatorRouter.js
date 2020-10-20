const express = require('express');
const vdpInterfaceInstance = require('../handlers/VDPInterface/VDPInterface');

const router = express.Router();

router.post('/search', function (req, res) {
    let { latitude, longitude, radius, maxResults} = req.body;
    vdpInterfaceInstance.searchForATM().then(results => {
        res.json(JSON.parse(results));
        res.end();
    }).catch(error => {
        throw new Error(error);
    });
});

module.exports = router;