const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// Creates a model instance for a user
const User = mongoose.model("users");

// Serialize user and save to cookie. Note: User id comes from mongoDB and is not profile id
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from cooke then get user by id from database.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          // We already have a record with give profile ID
          done(null, existingUser);
        } else {
          // We don't have a record with this ID, create a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
