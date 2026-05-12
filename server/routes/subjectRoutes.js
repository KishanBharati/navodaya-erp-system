const express = require("express");

const {
  createSubject,
  getSubjects,
} = require("../controllers/subjectController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, adminOnly, createSubject);

router.get("/", protect, getSubjects);

module.exports = router;