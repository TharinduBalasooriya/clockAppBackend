var mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdDate: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("note", noteSchema);