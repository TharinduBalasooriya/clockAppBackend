let router = require("express").Router();

//Controllers
const alarmController = require("../controllers/alarm_controller");
const worldclockcontroller=require("../controllers/world_controller");
const reminderController = require("../controllers/reminder_controller");
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

//WorldClock routes
router.route("/worldclock").get(worldclockcontroller.getWorldclcok);
router.route("/worldclock/:id").get(worldclockcontroller.getWorldclcokId);
router.route("/worldclock").post(worldclockcontroller.addWorldclock);
router.route("/worldclock/:id").delete(worldclockcontroller.deleteWorldclcok);
router.route("/worldclock/:id").put(worldclockcontroller.updateWorldclcok);


//Reminder routes

router.route("/reminders").get(reminderController.getReminders);
router.route("/reminders/:id").get(reminderController.getReminderByid);
router.route("/reminders").post(reminderController.addReminder);
router.route("/reminders/:id").delete(reminderController.deleteReminder);
router.route("/reminders/:id").put(reminderController.updateReminder);

module.exports = router;