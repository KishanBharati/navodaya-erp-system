const Teacher = require("../models/Teacher");


// CREATE TEACHER PROFILE
const createTeacher = async (req, res) => {
  try {
    const teacher = await Teacher.create(req.body);

    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL TEACHERS
const getTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find()
      .populate("user", "name email role")
      .populate("assignedSubjects");

    res.json(teachers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET SINGLE TEACHER
const getTeacherById = async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id)
      .populate("user")
      .populate("assignedSubjects");

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    res.json(teacher);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTeacher,
  getTeachers,
  getTeacherById,
};