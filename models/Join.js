const mongoose = require("mongoose");

const joinSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  ngoId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NGO"
  },
  joinedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Join", joinSchema);
