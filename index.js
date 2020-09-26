const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Note");
require("./services/passport");

// connect to mongoDB
mongoose.connect(keys.mongoURI);

const app = express();

// Middlewares are used here
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // milliseconds
    keys: [keys.cookieKey] // for encryption of cookie
  })
);
app.use(passport.initialize()); // Tell passport to use cookies
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/noteRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static("client/build"));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// In production Heroku sets the port for us, otherwise we use port 5000 in development
const PORT = process.env.PORT || 5000;
app.listen(PORT);
