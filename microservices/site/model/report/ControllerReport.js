const mongoose = require("mongoose");

const ControllerReportSchema = new mongoose.Schema(
  {
    technician: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    controllerUUID: {
      type: mongoose.Schema.ObjectId,
      ref: "Controller",
      required: true,
      unique: true,
    },
    olBboardUUID: {
      type: mongoose.Schema.ObjectId,
      ref: "Board",
      required: true,
      unique: true,
    },
    newBoardUUID: {
      type: mongoose.Schema.ObjectId,
      ref: "Board",
      required: true,
      unique: true,
    },
    controllerSerialNumber: { type: String },

    newBoardId: { type: String },
    oldBoardId: { type: String },
    faultCategory: { type: String },
    faultDesc: { type: String },
    workdone: { type: String },
    comment: { type: String },
    dateOfRepaire: { type: Date },
    pryAction: { type: String },
    secAction: { type: String },
    _12VCardAction: { type: String },
    LVDAction: { type: String },
    wiznetAction: { type: String },
    powerPackAction: { type: String },
    categoryAfterFix: { type: String },
    faultDescAfterFix: { type: String },
    remark: { type: String },
    versionBeforeRepair: { type: String },
    versionAfterRepair: { type: String },
    finalStatus: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ContrllerReport", ControllerReportSchema);
