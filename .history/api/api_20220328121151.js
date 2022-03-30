let router = require("express").Router();

//Controllers
const alarmController = require("../controllers/alarm_controller");
const worldclockcontroller=require("../controllers/world_controller");
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
router.route("/addworldclock").post(worldclockcontroller.addWorldclock);
router.route("/deleteworldclock/:id").delete(worldclockcontroller.deleteWorldclcok);
router.route("/updateworldclock/:id").put(worldclockcontroller.updateWorldclcok);
module.exports = router;