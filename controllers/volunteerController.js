const Volunteer = require("../models/Volunteer");
const Activity = require("../models/Activity");

exports.applyVolunteer = async (req, res) => {
  try {
    const volunteer = await Volunteer.create({
      userId: req.user.id,
      ...req.body
    });

    await Activity.create({
      userId: req.user.id,
      type: "volunteer"
    });

    res.status(201).json({ message: "Application submitted", volunteer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
