const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema(
  {
   
    boardId:{type:String,unique:true},
    version: { type: Number, enum: [8, 7] },
    presentLocation: { type: String },//site,lab,logistics
    status: { type: String, enum: ["fixed","not repairable","wip","new","not fixed"] },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", BoardSchema);
