const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema({
  title: String,
  body: String,
  archieved_at: Date,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date,
  starred: Boolean
});

// Before creating a record, we need to define a model class
mongoose.model("note", noteSchema);
