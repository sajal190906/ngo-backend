const Volunteer = require("../models/Volunteer");
const Join = require("../models/Join");
const User = require("../models/User");

exports.getDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    const volunteers = await Volunteer.find({ userId });

    const joins = await Join.find({ userId }).populate("ngoId");

    res.json({
      user,
      volunteers,
      joinedNGOs: joins
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
