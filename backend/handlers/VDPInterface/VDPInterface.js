const https = require('follow-redirects').https;
const fs = require('fs');

class VDPInterface {
    constructor (url, credentialsPath) {
        this.url = url;
        this.credentials = require(credentialsPath);
        let { userName, password } = this.credentials;
        this.authValue = "Basic " + new Buffer(userName + ":" + password).toString("base64");
        console.log(this.authValue);
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
    
    // TODO: Remove hard coding
    searchForMerchant() {
        console.log("Searching for merchant");
        
        var request = require('request');
        var options = {
            'method': 'POST',
            'url': 'https://sandbox.api.visa.com/merchantlocator/v1/locator',
            'headers': {
                'Authorization': 'Basic TEFYQTdNMVlGRUhSNzhIQjhDWkEyMU1xQnl0ZjhwaGJzX3duYTJZdkpfZ3FUVjd5Yzp5QWtqZHFFOUtOSGdPM2U0eDNkMjA1bGU0bXo=',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"searchOptions":{"matchScore":"true","maxRecords":"5","matchIndicators":"true"},"header":{"startIndex":"0","requestMessageId":"Request_001","messageDateTime":"2020-10-19T09:19:39.903"},"searchAttrList":{"distanceUnit":"M","distance":"2","merchantCountryCode":"840","latitude":"37.363922","longitude":"-121.929163","merchantName":"Starbucks"},"responseAttrList":["GNLOCATOR"]}),
            'cert': fs.readFileSync('./handlers/VDPInterface/cert.pem'),
            'key': fs.readFileSync('./handlers/VDPInterface/key.pem')
        };

        return new Promise ((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                resolve(response.body);    
            })
        });
    }
    
    addTravelItinerary() {
        
    }
    
    removeTravelItinerary() {
        // Not required
    }
}

module.exports = new VDPInterface("https://sandbox.api.visa.com", "./credentials.json")