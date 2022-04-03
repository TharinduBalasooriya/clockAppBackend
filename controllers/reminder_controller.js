
const Reminder = require("../models/reminder_model");


//add reminder
const addReminder = async (req, res) => {
  try {
    let newReminder = new Reminder(req.body);
    await newReminder.save();
    res.status(200).send(newReminder);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all reminders
const getReminders = async (req, res) => {
  try {
    let reminders = await Reminder.find();
    res.status(200).send(reminders);
  } catch (error) {
    
      console.log(error);
    res.status(500).send(error);
  }
};

//get reminder by id

const getReminderByid = async (req, res) => {
    try {
      let reminders = await Reminder.findById(req.params.id);
      res.status(200).send(reminders);
    } catch (error) {
      
        console.log(error);
      res.status(500).send(error);
    }
  };

// delete reminder

const deleteReminder = async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.status(200).send("Reminder Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

// update reminder

const updateReminder = async (req, res) => {
  try {
    let reminder = await Reminder.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(reminder);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addReminder,
  getReminders,
  getReminderByid,
  deleteReminder,
  updateReminder,
};
