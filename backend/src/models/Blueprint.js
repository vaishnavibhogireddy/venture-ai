const mongoose = require("mongoose");

const BlueprintSchema = new mongoose.Schema(
  {
    idea: {
      type: String,
      required: true,
    },
    blueprint: {
      type: Object,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Blueprint", BlueprintSchema);