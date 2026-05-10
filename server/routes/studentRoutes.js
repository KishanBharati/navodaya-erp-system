const express = require("express");

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const { protect } = require("../middleware/authMiddleware");
const { adminOnly } = require("../middleware/roleMiddleware");

const router = express.Router();


// CREATE
router.post("/", protect, adminOnly, createStudent);

// READ
router.get("/", protect, getStudents);

// READ SINGLE
router.get("/:id", protect, getStudentById);

// UPDATE
router.put("/:id", protect, adminOnly, updateStudent);

// DELETE
router.delete("/:id", protect, adminOnly, deleteStudent);

module.exports = router;