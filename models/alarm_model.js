var mongoose = require("mongoose");

let alarmSchema = new mongoose.Schema({
    hour: Number,
    minute: Number,
    ampm: String,
    days: String,
    active: Boolean,
    sound: String,
});

module.exports = mongoose.model("alarm", alarmSchema);