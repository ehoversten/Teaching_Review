const axios = require('axios');

let url = `https://api.spacexdata.com/v3/launches`;

module.exports = {
    findAll: function(req, res) {
        axios(url)
            .then(docs => res.json(docs.data))
            .catch(err => new Error(err));
    },
    findOne: function(req, res) {
        let findOneURL = `${url}/${req.params.flight_number}`;

        axios(findOneURL)
            .then(launch => res.json(launch.data))
            .catch(err => new Error(err));
    }
};
