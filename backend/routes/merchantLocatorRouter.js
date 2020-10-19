const express = require('express');
const vdpInterfaceInstance = require('../handlers/VDPInterface/VDPInterface');

const router = express.Router();

router.post('/search', function (req, res) {
    let { latitude, longitude, radius, maxResults } = req.body;
    console.log("Calling searchForMerchant()");
    vdpInterfaceInstance.searchForMerchant().then((result) => {
        res.json(JSON.parse(result));
        res.end();
    }).catch(error => {
        console.log("Error is: " + error);
    });
    // res.json({
    //     "results": [
    //         {
    //             name: "Store 1",
    //             category: "Supermarket",
    //             streetAddress: "1 Sample Road, 123456", 
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         },
    //         {
    //             name: "Store 2",
    //             category: "Gas Station",
    //             streetAddress: "1 Sample Road, 123456",
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         },
    //         {
    //             name: "Store 3",
    //             category: "Restaurant",
    //             streetAddress: "1 Sample Road, 123456",
    //             latitude: "123.123",
    //             longitude: "12.12"
    //         }
    //     ]
    // });
    
});

module.exports = router;