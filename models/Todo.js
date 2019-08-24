const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  content: String,
  _user: { type: Schema.Types.ObjectId, ref: "User" }
});

// Before creating a record, we need to define a model class
mongoose.model("todos", todoSchema);
