const express = require('express');

const router = express.Router();

router.get('/search', function (req, res) {
    res.end('ATM search end point reached');
});

module.exports = router;