const mongoose = require("mongoose");

const teacherSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    employeeId: {
      type: String,
      required: true,
      unique: true,
    },

    qualification: {
      type: String,
    },

    assignedClasses: [
      {
        className: String,
        section: String,
      },
    ],

    assignedSubjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Teacher", teacherSchema);