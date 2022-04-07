var mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    noteColor: String,
    red: Number,
    green: Number,
    blue: Number

});

module.exports = mongoose.model("note", noteSchema);