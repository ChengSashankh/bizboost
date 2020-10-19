const express = require('express');
const bodyParser = require('body-parser');
const {
    cardRouter,
    merchantLocatorRouter,
    ATMLocatorRouter,
    travelNotificationRouter
} = require('./routes');

// Initialize express app
const app = express();
app.use(express.json())

// Define API routes
app.use('/card', cardRouter);
app.use('/merchant', merchantLocatorRouter);
app.use('/ATM', ATMLocatorRouter);
app.use('/travel', travelNotificationRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000!')
})