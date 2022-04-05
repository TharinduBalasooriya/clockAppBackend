const Note = require("../models/note_model");

//add note
const addNote = async (req, res) => {
  try {
    let newNote = new Note(req.body);
    await newNote.save();
    res.status(200).send(newNote);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all Notes
const getNotes = async (req, res) => {
  try {
    let notes = await Note.find();
    res.status(200).send(notes);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get note by id
const getNoteById = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete note
const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.status(200).send("Note Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

//update Note
const updateNote = async (req, res) => {
  try {
    let note = await Note.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(note);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    addNote,
    getNotes,
    getNoteById,
    deleteNote,
    updateNote,
};