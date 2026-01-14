const User = require("../models/User");
const Volunteer = require("../models/Volunteer");
const NGO = require("../models/NGO");
const Join = require("../models/Join");

exports.getOverview = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    const volunteers = await Volunteer.find().populate({
  path: "userId",
  select: "-password"
});

    const ngos = await NGO.find();
    const joins = await Join.find()
  .populate({ path: "userId", select: "-password" })
  .populate("ngoId");

    res.json({
      users,
      volunteers,
      ngos,
      joins
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
