const mongoose = require('mongoose');
const { Schema } = mongoose;

const missionSchema = new Schema({
    mission_name: String,
    mission_id: String,
    manufacturers: [String],
    payload_ids: [String],
    wikipedia: String,
    website: String,
    twitter: String,
    description: String
});

const missionsModel = mongoose.model('missionsModel', missionSchema);

module.exports = missionsModel;
