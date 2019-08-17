const axios = require('axios');

let url = `https://api.spacexdata.com/v3/rockets`;

module.exports = {
    findAll: function(req, res) {
        axios(url)
            .then(docs => res.json(docs.data))
            .catch(err => new Error(err));
    },
    findOne: function(req, res) {
        let findOneURL = `${url}/${req.params.rocket_id}`;
        console.log(req.params);

        axios(findOneURL)
            .then(rocket => res.json(rocket.data))
            .catch(err => new Error(err));
    }
};
