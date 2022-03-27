const Alarm = require("../models/alarm_model");

//add alarm
const addAlarm = async (req, res) => {
  try {
    let newAlarm = new Alarm(req.body);
    await newAlarm.save();
    res.status(200).send(newAlarm);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get all alarms
const getAlarms = async (req, res) => {
  try {
    let alarms = await Alarm.find();
    res.status(200).send(alarms);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get alarm by id
const getAlarmById = async (req, res) => {
  try {
    let alarm = await Alarm.findById(req.params.id);
    res.status(200).send(alarm);
  } catch (error) {
    res.status(500).send(error);
  }
};

//delete alarm
const deleteAlarm = async (req, res) => {
  try {
    await Alarm.findByIdAndDelete(req.params.id);
    res.status(200).send("Alarm Deleted");
  } catch (error) {
    res.status(500).send(error);
  }
};

//update alarm
const updateAlarm = async (req, res) => {
  try {
    let alarm = await Alarm.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send(alarm);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
    addAlarm,
    getAlarms,
    getAlarmById,
    deleteAlarm,
    updateAlarm,
};