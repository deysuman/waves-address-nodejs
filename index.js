const express = require('express');
const bodyParser = require('body-parser');
const WavesAPI = require('@waves/waves-api');
const Waves = WavesAPI.create(WavesAPI.MAINNET_CONFIG);


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/genarate_address', (req, res) => {
    const seed = Waves.Seed.create();
    res.json({"error": false, 'result': seed});
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});