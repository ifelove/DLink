const mongoose = require("mongoose");
const { type } = require("os");

const TicketSchema = new mongoose.Schema(
  {
    assigner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    assignee: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    watcher: {
      type: [mongoose.Schema.ObjectId],
      ref: "User",
      required: true,
    },

    site: {
      type: mongoose.Schema.ObjectId,
      ref: "Site",
      required: true,
    },

    team: {
      type: String,
      enum: ["logistic", "fse", "lab", "noc"],
    },
    type: { type: String, enum: ["support", "rma-repair", "rma-logistic"] },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed", "resolved", "pending"],
    },
    priority: { type: String, enum: ["low", "medium", "high", "urgent"] },
    severity: { type: String, enum: ["minor", "major", "critical"] },
    root_cause: { type: String },
    tags: { type: String },
    attachments: { type: [String] },
    comments: { type: String },
    resolution: { type: String, enum: ["fixed", "not fixed", "duplicate"] },
    interactionId: { type: String },
    resolvedAt: { type: Date },
    closedAt: { type: Date },
    parentTickect: { type: String },
    relatedTicket: { type: String },
    timeSpent: { type: Date },
    workflowState: { type: String },
    //automationRuel,like auto assign
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", TicketSchema);
