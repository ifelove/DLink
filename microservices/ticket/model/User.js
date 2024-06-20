const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    companyId: { type: String },
    email: {
      type: String,
    },
    phoneNumber: { type: Number },
    team: { type: String, enum: ["fse", "noc", "lab", "logistic"] },
    role: { type: String, enum: ["admin", "user"] },
    location: { type: String },
    region: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
