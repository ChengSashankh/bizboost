class VDPInterface {
    constructor (url, credentialsPath) {
        this.url = url;
        this.credentialsPath = credentialsPath;
    }

    startCard(PAN, secret) {
        // Not required
    }

    stopCard(PAN, secret) {
        // Not required
    }

    getTravelPredictions() {

    }

    searchForATM() {

    }

    searchForMerchant() {

    }

    addTravelItinerary() {

    }

    removeTravelItinerary() {
        // Not required
    }
}