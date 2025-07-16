const mongoose = require("mongoose");

const issueSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved"],
      default: "Open",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          text: String,
          date: {
            type: Date,
            default: Date.now,
          },
        },
      },
    ],
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);
module.exports = Issue;
