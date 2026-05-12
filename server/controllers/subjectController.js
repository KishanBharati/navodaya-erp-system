const Subject = require("../models/Subject");


// CREATE SUBJECT
const createSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);

    res.status(201).json(subject);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// GET ALL SUBJECTS
const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();

    res.json(subjects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createSubject,
  getSubjects,
};