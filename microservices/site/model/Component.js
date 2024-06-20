const mongoose = require("mongoose");

const ComponentSchema = new mongoose.Schema(
  {
    name:{type:String},
    serialNumber: { type: String },
    type: { type: String, enum: ["modbus", "digital output", "digital input","analogue input","others"] },
    version: { type: Number},
    presentLocation: { type: String },
    status: { type: String, enum: ["okay", "faulty", "not-in-used"] },
    action: { type: String, enum: ["installed", "uninstalled", "on-repaire"] },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Component", ComponentSchema);
