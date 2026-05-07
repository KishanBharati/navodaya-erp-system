const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
        },

        password: {
            type: String,
            required: true,
            validate: {
                validator: function (value) {
                    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value);
                },
                message:
                    "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.",
            },
        },

        role: {
            type: String,
            enum: ["admin", "teacher", "warden", "student"],
            default: "student",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);