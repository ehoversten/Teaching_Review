const mongoose = require('mongoose');
const { Schema } = mongoose;

const launchSchema = new Schema({
    flight_number: Number,
    mission_name: String,
    mission_id: [String],
    upcoming: Boolean,
    tbd: Boolean,
    launch_year: String,
    rocket: {
        rocket_id: String,
        rocket_name: String,
        rocket_type: String,
        first_stage: {
            cores: [
                {
                    core_serial: String,
                    flight: Number,
                    block: String,
                    gridfins: Boolean,
                    legs: Boolean,
                    reused: Boolean,
                    land_success: String,
                    landing_intent: Boolean,
                    landing_type: String,
                    landing_vehicle: String
                }
            ]
        },
        second_stage: {
            block: Number,
            payloads: [
                {
                    payload_id: String,
                    norad_id: [String],
                    reused: Boolean,
                    customers: [String],
                    nationality: String,
                    manufacturer: String,
                    payload_type: String,
                    payload_mass_kg: Number,
                    payload_mass_lbs: Number,
                    orbit: String,
                    orbit_params: {
                        reference_system: String,
                        regime: String,
                        longitude: String,
                        semi_major_axis_km: String,
                        eccentricity: String,
                        periapsis_km: Number,
                        apoapsis_km: Number,
                        inclination_deg: Number,
                        period_min: String,
                        lifespan_years: String,
                        epoch: String,
                        mean_motion: String,
                        raan: String,
                        arg_of_pericenter: String,
                        mean_anomaly: String
                    }
                }
            ]
        }
    },
    launch_site: {
        site_id: String,
        site_name: String,
        site_name_long: String
    },
    launch_date_local: String,
    launch_success: Boolean,
    launch_failure_details: {
        time: String,
        altitude: String,
        reason: String
    },
    details: String
});

const launchesModel = mongoose.model('launchesModel', launchSchema);

module.exports = launchesModel;
