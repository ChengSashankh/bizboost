const express = require('express');

const router = express.Router();

router.post('/search', function (req, res) {
    let { latitude, longitude, radius, maxResults } = req.body;
    res.json({
        "results": [
            {
                name: "Store 1",
                category: "Supermarket",
                streetAddress: "1 Sample Road, 123456",
                latitude: "123.123",
                longitude: "12.12"
            },
            {
                name: "Store 2",
                category: "Gas Station",
                streetAddress: "1 Sample Road, 123456",
                latitude: "123.123",
                longitude: "12.12"
            },
            {
                name: "Store 3",
                category: "Restaurant",
                streetAddress: "1 Sample Road, 123456",
                latitude: "123.123",
                longitude: "12.12"
            }
        ]
    });
    res.end();
});

module.exports = router;