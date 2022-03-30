const Worldtime = require("../models/worldclock_model");

//add alarm
const addWorldclock = async (req, res) => {
    try {
      let newworld = new Worldtime(req.body);
      await newworld.save();
      res.status(200).send(newworld);
    } catch (error) {
      res.status(500).send(error);
    }
  };
