const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String
});

// Before creating a record, we need to define a model class
mongoose.model("users", userSchema);
