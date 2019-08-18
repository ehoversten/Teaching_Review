const axios = require('axios');
const { launchesModel } = require('../models');

let url = `https://api.spacexdata.com/v3/launches`;

module.exports = {
    findAll: function(req, res) {
        axios(url)
            .then(docs => {
                let data = docs.data;

                data.map(launch => {
                    let flight_number = launch.flight_number;

                    launchesModel.findOne({ flight_number }).then(exist => {
                        if (!exist || exist.length < 0) {
                            launchesModel
                                .create({
                                    flight_number: launch.flight_number,
                                    mission_name: launch.mission_name,
                                    mission_id: launch.mission_id,
                                    launch_year: launch.launch_year,
                                    launch_date_local: launch.launch_date_local,
                                    launch_success: launch.launch_success,
                                    rocket: launch.rocket,
                                    tbd: launch.tbd,
                                    upcoming: launch.upcoming,
                                    launch_site: launch.launch_site,
                                    details: launch.details,
                                    launch_failure_details:
                                        launch.launch_failure_details
                                })
                                .then(yeet => console.log(yeet));
                        } else {
                            console.log(`skipped ${launch.flight_number}`);
                        }
                    });
                });

                res.json(data);
            })
            .catch(err => new Error(err));
    },
    findOne: function(req, res) {
        let findOneURL = `${url}/${req.params.flight_number}`;

        axios(findOneURL)
            .then(launch => res.json(launch.data))
            .catch(err => new Error(err));
    }
};
