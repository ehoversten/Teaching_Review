const mongoose = require('mongoose');
const { Schema } = mongoose;

const launchSchema = new Schema({
    flight_number: { type: Number },
    mission_name: { type: String },
    mission_id: [String],
    upcoming: Boolean,
    launch_year: String,
    launch_date_unix: Number,
    launch_date_utc: Date,
    launch_date_local: Date,
    is_tentative: Boolean,
    tentative_max_precision: String,
    tbd: Boolean,
    launch_window: Number,
    rocket: {
        rocket_id: String,
        rocket_name: String,
        rocket_type: String,
        first_stage: {
            cores: [
                {
                    core_serial: String,
                    flight: Number,
                    block: { type: String, required: false },
                    gridfins: Boolean,
                    legs: Boolean,
                    reused: Boolean,
                    land_success: { type: String, required: false },
                    landing_intent: Boolean,
                    landing_type: { type: String, required: false },
                    landing_vehicle: { type: String, required: false }
                }
            ]
        },
        second_stage: {
            block: Number,
            payloads: [
                {
                    payload_id: String,
                    norad_id: [Number],
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
                        longitude: { type: String, required: false },
                        semi_major_axis_km: { type: String, required: false },
                        eccentricity: { type: String, required: false },
                        periapsis_km: Number,
                        apoapsis_km: Number,
                        inclination_deg: Number,
                        period_min: { type: String, required: false },
                        lifespan_years: { type: String, required: false },
                        epoch: { type: String, required: false },
                        mean_motion: { type: String, required: false },
                        raan: { type: String, required: false },
                        arg_of_pericenter: { type: String, required: false },
                        mean_anomaly: { type: String, required: false }
                    }
                }
            ]
        },
        fairings: {
            reused: Boolean,
            recovery_attempt: Boolean,
            recovered: Boolean,
            ship: { type: String, required: false }
        }
    },
    ships: [],
    telemetry: {
        flight_club: { type: String, required: false }
    },
    launch_site: {
        site_id: String,
        site_name: String,
        site_name_long: String
    },
    launch_success: Boolean,
    launch_failure_details: {
        time: Number,
        altitude: { type: String, required: false },
        reason: String
    },
    links: {
        mission_patch: String,
        mission_patch_small: String,
        reddit_campaign: { type: String, required: false },
        reddit_launch: { type: String, required: false },
        reddit_recovery: { type: String, required: false },
        reddit_media: { type: String, required: false },
        presskit: { type: String, required: false },
        article_link: String,
        wikipedia: String,
        video_link: String,
        youtube_id: String,
        flickr_images: [String]
    },
    details: String,
    static_fire_date_utc: Date,
    static_fire_date_unix: Number,
    timeline: {
        webcast_liftoff: Number
    }
});

const launchesModel = mongoose.model('launchesModel', launchSchema);

module.exports = launchesModel;
