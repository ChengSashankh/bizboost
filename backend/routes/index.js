const ATMLocatorRouter = require('./ATMLocatorRouter');
const cardRouter = require('./cardRouter');
const merchantLocatorRouter = require('./merchantLocatorRouter');
const travelNotificationRouter = require('./travelNotificationRouter');

module.exports = {
    cardRouter, 
    ATMLocatorRouter,
    merchantLocatorRouter,
    travelNotificationRouter
};