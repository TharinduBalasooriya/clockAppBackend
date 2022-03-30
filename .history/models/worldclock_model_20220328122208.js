var mongoose = require("mongoose");

let worldSchema = new mongoose.Schema({
    location: String,
    time: String,
    
});

module.exports = mongoose.model("worldtime", worldSchema);