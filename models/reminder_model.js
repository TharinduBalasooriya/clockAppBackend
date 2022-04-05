var mongoose = require("mongoose");

let reminderSchema = new mongoose.Schema({

    name :String,
    date :String,
    time : String,
    repeat : [String],
    priority : String,
    note : String,

    
});


module.exports = mongoose.model("reminder", reminderSchema);
