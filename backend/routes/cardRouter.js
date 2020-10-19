const express = require('express');

const router = express.Router();

/**
 * 
 */
router.post('/stop', function (req, res) {
    let {PAN, secret} = req.body;
    res.json({
        PAN,
        status: "Stopped",
        time: new Date().toDateString()
    });
    res.end();
});

router.post('/resume', function (req, res) {
    let {PAN, secret} = req.body;
    res.json({
        PAN,
        status: "Resumed",
        time: new Date().toDateString()
    });
    res.end();
});

module.exports = router;