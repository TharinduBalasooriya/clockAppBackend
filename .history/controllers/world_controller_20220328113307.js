const Worldtime = require("../models/worldclock_model");

//add World clock
const addWorldclock = async (req, res) => {
    try {
      let newworld = new Worldtime(req.body);
      await newworld.save();
      res.status(200).send(newworld);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //get all world times
const getWorldclcok = async (req, res) => {
    try {
      let Worlclock = await Worldtime.find();
      res.status(200).send(Worlclock);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  //get world times by id
const getWorldclcokId = async (req, res) => {
    try {
      let Worlclock = await Worldtime.findById(req.params.id);
      res.status(200).send(Worlclock);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
