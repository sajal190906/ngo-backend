const NGO = require("../models/NGO");
const Join = require("../models/Join");
const Activity = require("../models/Activity");

exports.createNGO = async (req, res) => {
  const ngo = await NGO.create(req.body);
  res.status(201).json(ngo);
};

exports.getNGOs = async (req, res) => {
  const ngos = await NGO.find();
  res.json(ngos);
};

exports.joinNGO = async (req, res) => {
  const joined = await Join.create({
    userId: req.user.id,
    ngoId: req.params.id
  });

  await Activity.create({
  userId: req.user.id,
  type: "join"
});


  res.json({ message: "Joined NGO successfully", joined });
};
