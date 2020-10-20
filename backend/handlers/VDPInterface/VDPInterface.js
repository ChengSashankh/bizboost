const https = require('follow-redirects').https;
const fs = require('fs');
const request = require('request');

class VDPInterface {
    constructor (url, credentialsPath) {
        this.url = url;
        this.credentials = require(credentialsPath);
        let { userName, password } = this.credentials;
        this.authValue = "Basic " + new Buffer(userName + ":" + password).toString("base64");
        // this.authValue = "Basic RFI2RUI1SjNBTFo4VUQxS0EyUDgyMTFBTVkzZDU1QVZETzN3NmdFR09pVWRkZFhJSTpwYzg1NXNFTVJk"
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
        var options = {
            'method': 'POST',
            'url': 'https://sandbox.api.visa.com/globalatmlocator/v1/localatms/totalsinquiry',
            'headers': {
                'Authorization': this.authValue,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"wsRequestHeaderV2":{"requestTs":"2020-10-19T09:20:38.000Z","requestMessageId":"test12345678","userBid":"10000108","correlationId":"909420141104053819418","applicationId":"VATMLOC","userId":"CDISIUserID"},"requestData":{"distanceUnit":"mi","distance":"20","culture":"en-US","options":{"findFilters":[{"filterValue":"C","filterName":"OPER_HRS"},{"filterValue":"","filterName":"AIRPORT_CD"},{"filterValue":"N","filterName":"WHEELCHAIR"},{"filterValue":"N","filterName":"BRAILLE_AUDIO"},{"filterValue":"N","filterName":"BALANCE_INQUIRY"},{"filterValue":"N","filterName":"CHIP_CAPABLE"},{"filterValue":"N","filterName":"PIN_CHANGE"},{"filterValue":"N","filterName":"RESTRICTED"},{"filterValue":"N","filterName":"PLUS_ALLIANCE_NO_SURCHARGE_FEE"},{"filterValue":"N","filterName":"ACCEPTS_PLUS_SHARED_DEPOSIT"},{"filterValue":"N","filterName":"V_PAY_CAPABLE"},{"filterValue":"N","filterName":"READY_LINK"}],"range":{"count":20,"start":10},"operationName":"or","sort":{"primary":"city","direction":"asc"},"useFirstAmbiguous":true},"location":{"placeName":"Allentown, PA"},"metaDataOptions":0}}),
            'cert': fs.readFileSync('./handlers/VDPInterface/cert.pem'),
            'key': fs.readFileSync('./handlers/VDPInterface/key.pem')
        };
        
        return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                resolve(response.body);
            });
        });
    }
    
    // TODO: Remove hard coding
    searchForMerchant() {
        console.log("Searching for merchant");
        
        var options = {
            'method': 'POST',
            'url': 'https://sandbox.api.visa.com/merchantlocator/v1/locator',
            'headers': {
                'Authorization': this.authValue,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "searchOptions":{"matchScore":"true","maxRecords":"5","matchIndicators":"true"},
                "header":{"startIndex":"0","requestMessageId":"Request_001","messageDateTime":"2020-10-19T09:19:39.903"},
                "searchAttrList":{"distanceUnit":"M","distance":"2","merchantCountryCode":"840","latitude":"37.363922","longitude":"-121.929163","merchantName":"Starbucks"},
                "responseAttrList":["GNLOCATOR"]
            }),
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
        var options = {
            'method': 'POST',
            'url': 'https://sandbox.api.visa.com/travelnotificationservice/v1/travelnotification/itinerary',
            'headers': {
                'Authorization': this.authValue,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"addTravelItinerary":{"returnDate":"2019-05-28","partnerBid":"12345678","destinations":[{"country":"840","state":"CA"}],"primaryAccountNumbers":[{"cardAccountNumber":"4645191800301234"},{"cardAccountNumber":"4645191800301235"}],"departureDate":"2019-05-21","userId":"Rajesh"}}),
            'cert': fs.readFileSync('./handlers/VDPInterface/cert.pem'),
            'key': fs.readFileSync('./handlers/VDPInterface/key.pem')
        };

        return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                resolve(response.body);
            });
        });
    }
    
    removeTravelItinerary() {
        // Not required
    }
}

module.exports = new VDPInterface("https://sandbox.api.visa.com", "./credentials.json")