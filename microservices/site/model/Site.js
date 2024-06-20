const mongoose = require("mongoose");

const SiteSchema = new mongoose.Schema(
  {
    siteName: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    address: { type: String },
    topograph: { type: String },
    type: { type: String },
    location: { type: String },
    region: { type: String },
    controller: {
      type: mongoose.Schema.ObjectId,
      ref: "Controller",
      required: true,
    },
    components: {
      type: [mongoose.Schema.ObjectId],
      ref: "Component",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Site", SiteSchema);
