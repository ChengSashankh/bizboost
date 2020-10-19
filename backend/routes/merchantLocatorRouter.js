const express = require('express');

const router = express.Router();

router.get('/search', function (req, res) {
    res.end('Merchant search end point reached');
});

module.exports = router;