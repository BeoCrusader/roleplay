var mongoose = require('mongoose');

var SettingSchema = new mongoose.Schema({
    name: String,
    story: String,
    picture: Object,
    games_ids: Array,
    uploaded_at: {type: Date, default:Date.now },
});

module.exports = mongoose.model('Settings', SettingSchema);