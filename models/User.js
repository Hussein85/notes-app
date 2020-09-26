const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String
});

// Before creating a record, we need to define a model class
mongoose.model("user", userSchema);
