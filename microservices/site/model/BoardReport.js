const mongoose = require("mongoose");
const { type } = require("os");

const BoardReportSchema = new mongoose.Schema(
  {
   



 technician : {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  boardUUID:{
      type: mongoose.Schema.ObjectId,
      ref: "Board",
      required: true,
      unique: true,
    },
  boardId : {type:String},
  faultCategory :  {type:String},
  faultDesc :  {type:String},
  comment :  {type:String},
  dateOfRepaire : {type:Date},
  componentReplaced :  {type:[String]},
  categoryAfterFix :  {type:String},
  faultDescAfterFix :  {type:String},
  remark :  {type:String},
  version :  {type:String}




  },
  { timestamps: true }
);

module.exports = mongoose.model("BoardReport", BoardReportSchema);
