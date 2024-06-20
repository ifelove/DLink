const mongoose = require("mongoose");

const ControllerSchema = new mongoose.Schema(
  {
    serialNumber: { type: String },
    pry_boardId: {
      type: mongoose.Schema.ObjectId,
      ref: "Board",
      required: true,
    },
    sec_boardId: { type: String },
    type: { type: String, enum: ["plastic", "2u", "grey"] },
    version: { type: String, enum: ["8", "7"] },
    presentLocation: { type: String },
    region: { type: String },
    status: { type: String, enum: ["okay", "faulty", "not-in-used"] },
    action: { type: String, enum: ["installed", "uninstalled", "on-repaire"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Controller", ControllerSchema);
