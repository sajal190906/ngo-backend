const express = require("express");
const auth = require("../middleware/authMiddleware");
const { getOverview } = require("../controllers/adminController");

const router = express.Router();

router.get("/overview", auth, getOverview);

module.exports = router;