const mongoose = require("mongoose");

const PartSchema = new mongoose.Schema(
  {
    SN: { type: String },
    status: { type: String },
  },
  { _id: false }
);

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
    version: { type: Number, enum: [8, 7] },
    presentLocation: { type: String },
    status: { type: String, enum: ["okay", "faulty", "repaired", "new"] },
    action: {
      type: String,
      enum: ["installed", "uninstalled", "on repaire", "in stock"],
    },
    controllerPart: {
      powerPack: { type: PartSchema },
      LVDSN: { type: PartSchema },
      _12VCard: { type: PartSchema },
      voltageCard: { type: PartSchema },
      wiznet: { type: PartSchema },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Controller", ControllerSchema);
