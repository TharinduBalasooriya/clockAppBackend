let router = require("express").Router();

//Controllers
const alarmController = require("../controllers/alarm_controller");

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

module.exports = router;