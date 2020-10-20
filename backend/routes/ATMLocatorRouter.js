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

    // res.json({
    //     "results": [
    //         {
    //             name: "ATM 1",
    //             streetAddress: "1 Sample Road, 123456",
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         },
    //         {
    //             name: "ATM 2",
    //             streetAddress: "1 Sample Road, 123456",
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         },
    //         {
    //             name: "ATM 3",
    //             streetAddress: "1 Sample Road, 123456",
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         }
    //     ]
    // });
    // res.end();
});

module.exports = router;