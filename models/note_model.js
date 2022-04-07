var mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdDate: {
        type: Date,
        default: Date.now(),
    },
    noteColor: {
        type: String,
        default: "0xff9e9e9e"
    }
});

module.exports = mongoose.model("note", noteSchema);