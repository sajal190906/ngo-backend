const Activity = require("../models/Activity");
const User = require("../models/User");

exports.getLeaderboard = async (req, res) => {
  const activities = await Activity.aggregate([
    { $group: { _id: "$userId", score: { $sum: 1 } } },
    { $sort: { score: -1 } }
  ]);

  const leaderboard = [];

  for (let item of activities) {
    const user = await User.findById(item._id).select("name email");
    leaderboard.push({ user, score: item.score });
  }

  res.json(leaderboard);
};
