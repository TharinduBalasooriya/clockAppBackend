let router = require("express").Router();

//Controllers
const alarmController = require("../controllers/alarm_controller");
const noteController = require("../controllers/note_controller");

//home route
router.get("/", (req, res) => {
  res.send("Clock API");
});

//Alarm routes
router.route("/alarms").get(alarmController.getAlarms);
router.route("/alarms/:id").get(alarmController.getAlarmById);
router.route("/alarms").post(alarmController.addAlarm);
router.route("/alarms/:id").delete(alarmController.deleteAlarm);
router.route("/alarms/:id").put(alarmController.updateAlarm);


//Note routes
router.route("/notes").get(noteController.getNotes);
router.route("/notes/:id").get(noteController.getNoteById);
router.route("/notes").post(noteController.addNote);
router.route("/notes/:id").delete(noteController.deleteNote);
router.route("/notes/:id").put(noteController.updateNote);

module.exports = router;