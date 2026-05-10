const mongoose = require("mongoose");

const studentSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    rollNumber: {
      type: Number,
      required: true,
      unique: true,
    },

    className: {
      type: String,
      required: true,
    },

    section: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female"],
    },

    hostel: {
      type: Boolean,
      default: true,
    },

    parentName: {
      type: String,
    },

    parentPhone: {
      type: String,
    },

    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);