const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema(
  {
    subjectName: {
      type: String,
      required: true,
      unique: true,
    },

    subjectCode: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Subject", subjectSchema);