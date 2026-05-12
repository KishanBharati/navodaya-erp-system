const express = require("express");

const {
  createTeacher,
  getTeachers,
  getTeacherById,
} = require("../controllers/teacherController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/", protect, adminOnly, createTeacher);

router.get("/", protect, getTeachers);

router.get("/:id", protect, getTeacherById);

module.exports = router;