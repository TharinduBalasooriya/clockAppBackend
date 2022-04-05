var mongoose = require("mongoose");

let worldSchema = new mongoose.Schema({
    location: String,
    time: Number,
    
});

module.exports = mongoose.model("worldtime", worldSchema);