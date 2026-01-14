const express = require("express");
const auth = require("../middleware/authMiddleware");
const { createNGO, getNGOs, joinNGO } = require("../controllers/ngoController");

const router = express.Router();

router.post("/", createNGO);                 // admin use later
router.get("/", getNGOs);                    // list NGOs
router.post("/join/:id", auth, joinNGO);     // protected

module.exports = router;
