const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  content: String
});

// Before creating a record, we need to define a model class
mongoose.model("note", noteSchema);
