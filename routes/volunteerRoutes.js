const express = require("express");
const auth = require("../middleware/authMiddleware");
const { applyVolunteer } = require("../controllers/volunteerController");

const router = express.Router();

router.post("/apply", auth, applyVolunteer);

module.exports = router;
