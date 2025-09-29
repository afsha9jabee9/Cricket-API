const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  team: String,
});

module.exports = mongoose.model("Player", playerSchema);
